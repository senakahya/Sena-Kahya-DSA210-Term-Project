# Women in Movies: Representation and Success

## Project Overview

In this project, I analyze how women are represented in movies and investigate whether female representation is related to movie success. The film industry plays an important role in shaping public perception, and representation in movies can influence how audiences view gender roles. For this reason, I focus on understanding how women appear in films and whether gender representation is associated with different success metrics.

I specifically explore questions such as:

- Do movies directed by women perform differently?
- Does higher female representation affect movie success?
- Do movies with more female representation receive higher ratings?
- Is there a relationship between female representation and audience engagement?

To answer these questions, I use publicly available movie datasets and perform exploratory data analysis and hypothesis testing.

---

## Dataset

The dataset contains thousands of movies and includes the following features:

- `title`
- `year`
- `budget`
- `revenue`
- `vote_average`
- `vote_count`
- `popularity`
- `female_ratio`
- `female_director`
- `bechdelRating`
- `imdbAverageRating`
- `numVotes`
- `runtimeMinutes`
- `genre1`
- `genre2`
- `genre3`

These variables allow me to analyze female representation from both financial and audience-based perspectives.

---

## Data Sources

This project uses publicly available datasets:

### 1. TMDB 5000 Movies Dataset

This dataset provides detailed movie information including budget, revenue, cast, and popularity.

Source:  
https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata

Files used:

- tmdb_5000_movies.csv  
- tmdb_5000_credits.csv  

---

### 2. Bechdel Test Dataset

This dataset contains Bechdel test results used to measure female representation in movies.

Source:  
https://bechdeltest.com/

Merged dataset source:  
https://www.kaggle.com/datasets/tomasonjo/imbd-bechdel-test

File used:

- Bechdel_IMDB_Merge0524.csv

---

## Exploratory Data Analysis (EDA)

I first performed exploratory data analysis to better understand the dataset and identify patterns. During this stage, I:

- Checked missing values
- Examined variable distributions
- Analyzed female representation across genres
- Compared female and male directors
- Visualized relationships between variables

I created several visualizations including:

- Bar plots  
- Box plots  
- Scatter plots  
- Heatmaps  
- Pairplots  

These visualizations helped me understand trends and patterns before moving to hypothesis testing.

---

## Hypothesis Testing

After completing exploratory analysis, I conducted hypothesis testing to investigate whether female representation and female directors affect movie success.

I measured success using multiple indicators:

- Revenue (financial success)
- IMDb rating (audience perception)
- Vote count (audience engagement)
- Popularity (overall interest)

### Female Director Analysis

I tested whether female directors affect:

- Revenue
- IMDb rating
- Vote count
- Popularity

### Female Representation Analysis

I also tested whether female representation affects:

- Revenue
- IMDb rating
- Vote count
- Popularity

For each hypothesis, I:

- Created visualizations
- Conducted statistical tests
- Interpreted the results

---

## Tools and Libraries

I used the following tools and libraries:

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- SciPy

These tools helped me perform data analysis, visualization, and hypothesis testing.

---
## Use of AI Tools

AI tools were used as supportive resources during this project, primarily ChatGPT. These tools assisted in code refinement, methodological improvements, and analytical planning.

AI assistance was used for:

- improving and organizing Python code  
- debugging and optimizing analysis workflows  
- identifying additional exploratory data analysis techniques  
- suggesting hypothesis testing approaches  
- improving visualization strategies  
- refining documentation and project structure  

### Example Prompts

Examples of prompts used include:

- "How can I improve this Python code for merging movie datasets?"
- "What additional EDA techniques can I apply to analyze female representation in movies?"
- "How can I test whether female directors affect movie success?"
- "Suggest better visualization methods for comparing female representation."

All final decisions, dataset preparation, analysis implementation, and interpretation of results were conducted by the author. AI tools were used solely as supportive guidance throughout the project.

---

## Project Goal

The goal of this project is to better understand how gender representation in movies relates to different measures of success. By analyzing female directors and female representation, I aim to explore whether gender diversity has an impact on movie performance.

---



Sena Kahya  
DSA 210 — Introduction to Data Science