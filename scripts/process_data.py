import pandas as pd
import json
import os

# Define file paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, 'data', 'courses.csv')
EXPORT_PATH = os.path.join(BASE_DIR, 'data', 'courses_processed.json')

def process_course_data():
    """
    Reads course data from CSV, keeps only highly rated courses,
    and exports to JSON for the web application.
    Demonstrates: Pandas, Data Cleaning, JSON Serialization.
    """
    print(f"Reading data from {DATA_PATH}...")
    
    try:
        df = pd.read_csv(DATA_PATH)
        
        # Display initial stats
        print(f"Total courses loaded: {len(df)}")
        print(f"Average Rating: {df['rating'].mean():.2f}")
        
        # Data Cleaning/Feature Engineering
        # 1. Add a 'value_score' column (rating per dollar, handling free courses)
        df['value_score'] = df.apply(lambda row: row['rating'] / row['price'] if row['price'] > 0 else row['rating'] * 10, axis=1)
        
        # 2. Filter for quality control (e.g., recommend only courses with > 4.5 rating)
        # For the app we want all, but let's just mark them as 'top_pick'
        df['is_top_pick'] = df['rating'] >= 4.7
        
        # 3. Process tags into a list ensuring no whitespace
        df['tags'] = df['tags'].apply(lambda x: [tag.strip() for tag in str(x).split(',')])
        
        # Display top 5 courses by value score
        print("\nTop 5 Value Courses:")
        print(df.sort_values(by='value_score', ascending=False)[['title', 'price', 'rating']].head())
        
        # Export for the Frontend
        # Convert to list of dicts
        courses_json = df.to_dict(orient='records')
        
        with open(EXPORT_PATH, 'w') as f:
            json.dump(courses_json, f, indent=4)
            
        print(f"\nSuccessfully exported processed data to {EXPORT_PATH}")
        
    except Exception as e:
        print(f"Error processing data: {e}")

if __name__ == "__main__":
    process_course_data()
