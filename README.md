# Assignment
## Task: Multi-Axis Sales and Inventory Trend Analysis

- Create a Chart.js visualization that combines multiple datasets to analyze the relationship between vehicle sales, inventory levels, and appointment rates for a USA automotive dealership over the past 12 months. The chart should include the following elements:
1. Primary Y-axis: Total monthly vehicle sales (new and used combined)
2. Secondary Y-axis: Inventory levels (new vehicles only)
3. X-axis: Months (December 2023 to November 2024)
4. Line chart: Monthly appointment set rates for new vehicles (as a percentage)
5. Bar chart: Monthly sales breakdown between new and used vehicles
6. Scatter plot: Appointment close rates for new vehicles
 
**Requirements :**
1. Implement the chart using Chart.js version 3.7 or later.
2. Configure the chart to use a stacked bar chart for new and used vehicle sales.
3. Set up three different y-axes for sales, inventory, and percentages.
4. Implement interactive tooltips that show all relevant data for each data point.
5. Add a legend that clearly distinguishes between the different datasets.
6. Implement responsive design to ensure the chart looks good on various screen sizes.
7. Add animations to make the chart more engaging when it loads or when data updates.
 
**Optional :**
1. Implement a date range selector to allow users to zoom in on specific time periods.
2. Add a trendline for the appointment set rate to show the overall trend.
3. Implement click events on the scatter plot points to show additional details about each month's appointment close rate.
 
**API Task :**
1. Create a sample database and create a table (any Database of your choice I.E SQL server, MY SQL, Oracle)
2. Use the columns and the data given in the excel sheet to load the data into the database.
3. Create an API to bring in the data from this table and fill in the chart.

---
<img width="1792" alt="Screenshot 2025-05-30 at 1 38 23 PM" src="https://github.com/user-attachments/assets/e787ce9f-f01a-4cdf-be27-639d9a2061b8" />
<img width="1792" alt="Screenshot 2025-05-30 at 1 38 52 PM" src="https://github.com/user-attachments/assets/5b9149f8-c593-4efa-9ecb-3332fb046855" />

## TechStack: 
**React, Js, Chart.js, Material UI, MongoDB (Mongoose ORM), Tailwind CSS**

## Specification: 
1. Navbar have two button Home and Chat by default showing Home page dahsboard data
2. Use React Router library for enables client-side routing in React applications.
3. Showing Data in Card
4. Showing Chart of data analysis

## Project Structure Overview
1. Pages and Navigation
  - Home → Shows Dashboard Cards and Summary
  - Chat → Shows Chart.js visualization
- Use react-router-dom for client-side routing between pages.
  
2. File structure
```
  src/
│
├── components/
│   ├── Navbar.jsx
│   ├── CardGrid.jsx
│
├── pages/
│   ├── Home.jsx         // Card display of metrics
│   ├── Chat.jsx         // Chart.js visualizations
│
├── App.jsx              // Main Router Setup
├── index.js
```
3. Chat.jsx – Multi-Axis Chart: Uses Chart.js 3.7+

- Has 3 y axes: Sales (stacked), Inventory, and Percentage
- Shows tooltips, legends, animations, and is responsive
- Optionally: allows date range filtering or trendline

## How to run code
1. Frontend:
   - Clone repository
   - npm i
   - npm run dev
3. Backend:
   - Clone repository
   - npm i
   - npm start

