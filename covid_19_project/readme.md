# COVID-19 Tracker Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Deployed Link](#deployed-link)
3. [File Structure](#file-structure)
4. [File Descriptions](#file-descriptions)
   - [index.html](#indexhtml)
   - [script.js](#scriptjs)
   - [style.css](#stylecss)
5. [User  Interaction Flow](#user-interaction-flow)
6. [Error Handling](#error-handling)
7. [Future Enhancements](#future-enhancements)
8. [Conclusion](#conclusion)

---

## Project Overview
The COVID-19 Tracker is a web application that provides real-time statistics on COVID-19 cases across different countries. Users can input a country name to retrieve data such as active cases, new cases, recovered cases, total cases, total deaths, and total tests.

---

## Deployed Link
- The COVID-19 Tracker is deployed and can be accessed at: [COVID-19 Tracker](https://java-script-project-1f1j.vercel.app/)

---

## File Structure
The project consists of three main files:
- **index.html**: The main HTML file that structures the web page.
- **script.js**: The JavaScript file that handles user interactions and data fetching.
- **style.css**: The CSS file that styles the web page.

---

## File Descriptions

### index.html
- **Purpose**: This file contains the structure of the web page.
- **Key Elements**:
  - A header (`<h1>`) for the tracker title.
  - An input field for entering the country name.
  - A button to fetch data.
  - Divs to display various COVID-19 statistics (active cases, new cases, recovered cases, total cases, total deaths, total tests).

### script.js
- **Purpose**: This file contains the JavaScript code that manages the application's functionality.
- **Key Functions**:
  - **Event Listeners**: Listens for button clicks and Enter key presses to trigger data fetching.
  - **getData() Function**: 
    - Fetches data from the COVID-19 API based on the user input.
    - Updates the HTML with the fetched data or displays an error message if the country is not found.

### style.css
- **Purpose**: This file contains the CSS styles that enhance the visual presentation of the web page.
- **Key Styles**:
  - Background colors, text alignment, and button styles.
  - Styles for different data display sections to make them visually distinct and user-friendly.

---

## User Interaction Flow
1. **Input**: Users enter a country name in the input field.
2. **Data Fetching**: Upon clicking the "Get Data" button or pressing Enter, the application fetches the COVID-19 data for the specified country.
3. **Display**: The application displays the following statistics:
   - Active Cases
   - New Cases
   - Recovered Cases
   - Total Cases
   - Total Deaths
   - Total Tests

---

## Error Handling
- If the user does not enter a country name, an alert prompts them to do so.
- If the country is not found in the API, an error message is displayed, and the console logs the error for debugging purposes.

---

## Future Enhancements
- Implementing a search history feature to allow users to revisit previous searches.
- Adding a map view to visualize data geographically.
- Providing notifications for significant changes in COVID-19 statistics.
- Integrating historical data to show trends over time.

---

## Conclusion
The COVID-19 Tracker is a simple yet effective tool for users to stay informed about the pandemic's status in different countries. The project can be further enhanced with additional features to improve user experience and data visualization.

--- 

**End of Document**