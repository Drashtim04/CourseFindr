import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Define file paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, 'data', 'courses.csv')
OUTPUT_DIR = os.path.join(BASE_DIR, 'data', 'visualizations')

def create_visualizations():
    """
    Generates static visualizations of the course data.
    Demonstrates: Matplotlib, Seaborn, Data Visualization.
    """
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    try:
        df = pd.read_csv(DATA_PATH)
        
        # Set theme
        sns.set_theme(style="whitegrid")
        
        # 1. Price Distribution Histogram
        plt.figure(figsize=(10, 6))
        sns.histplot(data=df, x='price', bins=10, kde=True, color='skyblue')
        plt.title('Distribution of Course Prices')
        plt.xlabel('Price ($)')
        plt.ylabel('Count')
        plt.savefig(os.path.join(OUTPUT_DIR, 'price_distribution.png'))
        print("Created price_distribution.png")
        plt.close()
        
        # 2. Ratings by Difficulty Boxplot
        plt.figure(figsize=(10, 6))
        sns.boxplot(data=df, x='difficulty', y='rating', palette="Set2")
        plt.title('Course Ratings by Difficulty Level')
        plt.savefig(os.path.join(OUTPUT_DIR, 'rating_by_difficulty.png'))
        print("Created rating_by_difficulty.png")
        plt.close()
        
        # 3. Course Count by Difficulty Bar Chart
        plt.figure(figsize=(8, 6))
        difficulty_counts = df['difficulty'].value_counts()
        sns.barplot(x=difficulty_counts.index, y=difficulty_counts.values, palette="viridis")
        plt.title('Number of Courses per Difficulty')
        plt.ylabel('Number of Courses')
        plt.savefig(os.path.join(OUTPUT_DIR, 'difficulty_counts.png'))
        print("Created difficulty_counts.png")
        plt.close()
        
    except Exception as e:
        print(f"Error creating visualizations: {e}")

if __name__ == "__main__":
    create_visualizations()
