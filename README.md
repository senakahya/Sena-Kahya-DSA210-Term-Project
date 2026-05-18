# Women in Movies: Representation and Success

## Project Website

View the interactive project website here:  
https://senakahya.github.io/Sena-Kahya-DSA210-Term-Project/

## Project Overview

In this project, I analyze how women are represented in movies and investigate whether female representation is related to movie success. The film industry plays an important role in shaping public perception, and representation in movies can influence how audiences view gender roles. For this reason, I focus on understanding how women appear in films and whether gender representation is associated with different success metrics.

I specifically explore questions such as:

- Do movies directed by women perform differently?
- Does higher female representation affect movie success?
- Do movies with more female representation receive higher ratings?
- Is there a relationship between female representation and audience engagement?

To answer these questions, I use a cleaned and enriched movie dataset and perform exploratory data analysis, hypothesis testing, and machine learning.

---

## Dataset

The main data source for this project is **The Movies Dataset**:

https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset

This dataset consists of credits.csv, links.csv, movies_metadata.csv and ratings.csv

This public dataset provides movie metadata, cast and crew information, user ratings, genres, release information, and external database identifiers.

The dataset was enriched with two additional public sources:

- **Movies, IMDb and Bechdel Information**  
  https://www.kaggle.com/datasets/nliabzd/movies-imdb-and-bechdel-information

- **The Oscar Award, 1927-2025**  
  https://www.kaggle.com/datasets/unanimad/the-oscar-award

The Bechdel/IMDb dataset was merged by IMDb ID and adds `bechdelRating`, `bechdel_pass`, `imdbAverageRating`, and `numVotes`. The Oscar dataset was merged by movie title and year and adds nomination and win indicators.

After cleaning, merging, and feature engineering, the final dataset used in the analysis is:

- `data/processed/cleaned_movie_dataset.csv`

This cleaned and enriched dataset contains movie metadata, financial variables, audience-based metrics, award context, and gender representation features from both cast and crew information.

Key variables include:

- Movie information: `title`, `year`, `release_decade`, `runtime`, `genre1`, `genre2`, `genre3`
- Financial outcomes: `budget`, `revenue`, `profit`, `roi`, `log_budget`, `log_revenue`
- Audience outcomes: `vote_average`, `vote_count`, `popularity`, `imdbAverageRating`, `numVotes`, `movielens_avg_rating`
- Cast representation: `female_ratio_all_cast`, `female_ratio_top3`, `female_ratio_top5`, `female_ratio_top10`, `female_lead`
- Crew representation: `female_director`, `female_writer`, `female_producer`, `female_editor`, `female_cinematographer`, `female_crew_ratio`
- Contextual indicators: `bechdelRating`, `bechdel_pass`, `oscar_nomination_count`, `oscar_win_count`
- Data availability flags: `has_budget_data`, `has_revenue_data`, `has_financial_data`, `has_cast_representation_data`, `has_crew_representation_data`

For financial analysis, zero values in `budget` and `revenue` are treated as missing values. Profit, ROI, and log-transformed financial variables are calculated only when the required financial data is valid.


---

## Exploratory Data Analysis (EDA)

I first performed exploratory data analysis to understand the structure of the cleaned dataset and identify the main patterns in gender representation. During this stage, I:

- Checked missing values
- Examined variable distributions
- Analyzed female representation in cast and crew roles
- Compared representation patterns across genres and release decades
- Examined ratings, engagement, and financial outcomes separately
- Visualized relationships between representation variables and movie outcomes

I created several visualizations including:

- Bar plots  
- Box plots  
- Scatter plots  
- Heatmaps  
- Fitted trend plots  

These visualizations helped identify which relationships were worth testing more formally in the hypothesis testing section.

---

## Hypothesis Testing

After completing exploratory analysis, I conducted hypothesis testing to examine whether gender representation is statistically associated with movie outcomes.

I tested outcomes in separate groups instead of combining them into one success score:

- Ratings: TMDB, IMDb, and MovieLens ratings
- Engagement: popularity, TMDB vote count, and IMDb vote count
- Financial outcomes: log revenue, profit, and ROI

### Female Director Analysis

I tested whether movies with at least one female director differ from movies without a female director in:

- Ratings
- Engagement
- Financial outcomes

### Cast and Crew Representation Analysis

I also tested whether representation measures are associated with movie outcomes:

- Top-5 female cast share
- Female crew ratio
- Female writer and producer status
- Female lead status

The hypothesis tests include:

- Welch's t-tests for binary group comparisons
- Mann-Whitney U tests as robustness checks for skewed outcomes
- Spearman correlations for representation ratios
- Chi-square tests for categorical representation variables

Financial tests use only movies with valid financial data, following the cleaning rule that treats zero budget and zero revenue as missing values.
---

## Tools and Libraries

The analysis was developed in Python using Jupyter Notebook. The main libraries used in the project are:

- Pandas and NumPy for data cleaning, feature engineering, and data manipulation
- Matplotlib and Seaborn for data visualization
- SciPy for statistical hypothesis testing
- Scikit-learn for machine learning models and evaluation

Together, these tools supported the full workflow from dataset preparation to EDA, hypothesis testing, and machine learning.

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

- "How can I improve this Python code for preparing the cleaned movie dataset?"
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
