import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import json
import os

# Define file paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, 'data', 'courses.csv')
EXPORT_PATH = os.path.join(BASE_DIR, 'data', 'recommendations.json')

def generate_recommendations():
    """
    Generates content-based recommendations using TF-IDF and Cosine Similarity.
    """
    print("Loading course data...")
    try:
        df = pd.read_csv(DATA_PATH, quotechar='"', skipinitialspace=True)
        
        # Create a "Content" column combining title, tags, and category (inferred from tags/title)
        # This text will be vectorized
        df['content'] = df['title'] + " " + df['tags'] + " " + df['difficulty']
        
        print("Vectorizing course content (TF-IDF)...")
        # Initialize TF-IDF Vectorizer
        tfidf = TfidfVectorizer(stop_words='english')
        
        # Construct the TF-IDF Matrix
        tfidf_matrix = tfidf.fit_transform(df['content'])
        
        print(f"Matrix Shape: {tfidf_matrix.shape}")
        
        print("Calculating Cosine Similarity...")
        # Compute Cosine Similarity Matrix
        cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
        
        # Generate Recommendations Dictionary
        # For each course, find the top 5 most similar courses
        recommendations = {}
        
        for idx, row in df.iterrows():
            # Get similarity scores for this course
            sim_scores = list(enumerate(cosine_sim[idx]))
            
            # Sort the courses based on similarity scores
            sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
            
            # Get the scores of the 5 most similar courses (ignoring itself at index 0)
            sim_scores = sim_scores[1:6]
            
            # Get the course indices
            course_indices = [i[0] for i in sim_scores]
            
            # Store recommendation IDs
            recommendations[int(row['id'])] = [int(df['id'].iloc[i]) for i in course_indices]
            
        # Also generate "Category" based recommendations for cold start (new users)
        # We simulate this by averaging the vectors of keywords like 'web development'
        category_recs = {}
        categories = ['web development', 'data science', 'business', 'design', 'lifestyle']
        
        for cat in categories:
            # Transform the category keyword into the same vector space
            query_vec = tfidf.transform([cat])
            
            # Calculate similarity with all courses
            sim_scores = linear_kernel(query_vec, tfidf_matrix).flatten()
            
            # Get top 5 indices
            top_indices = sim_scores.argsort()[:-6:-1]
            
            category_recs[cat] = [int(df['id'].iloc[i]) for i in top_indices]
            
        
        # Combine into final export structure
        export_data = {
            "course_to_course": recommendations,
            "category_cold_start": category_recs
        }
        
        with open(EXPORT_PATH, 'w') as f:
            json.dump(export_data, f, indent=4)
            
        print(f"Successfully exported AI recommendations to {EXPORT_PATH}")
        print("Example 'Web Development' recommendations:", category_recs['web development'])
        
    except Exception as e:
        print(f"Error generating recommendations: {e}")

if __name__ == "__main__":
    generate_recommendations()
