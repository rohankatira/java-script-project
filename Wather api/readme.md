# Weather App Documentation

## Table of Contents
1. [Overview](#overview)
2. [Deployed Link](#deployed-link)
3. [Technologies Used](#technologies-used)
4. [HTML Structure](#html-structure)
   - [Key Components](#key-components)
5. [JavaScript Functionality](#javascript-functionality)
   - [Key Variables](#key-variables)
   - [Key Functions](#key-functions)
6. [Usage](#usage)
7. [Conclusion](#conclusion)

---

## Overview
The Weather App is a simple web application that allows users to search for weather information by city. It displays current weather conditions and a forecast for the upcoming days. The application utilizes the OpenWeatherMap API to fetch real-time weather data.

## Deployed Link
You can access the deployed version of the Weather App at the following link: [Weather App](https://wather-api-rust.vercel.app/)

## Technologies Used
- HTML5
- CSS3 (linked via `style.css`)
- JavaScript (ES6)
- OpenWeatherMap API
- Google Fonts
- Bootstrap Icons

## HTML Structure
The HTML code defines the structure of the web page, including the layout and elements required for user interaction.

### Key Components
- **DOCTYPE and HTML Tag**: Defines the document type and language.
- **Head Section**: Contains metadata, links to stylesheets, and the title of the application.
  - Links to Google Fonts and Bootstrap Icons for styling.
- **Body Section**: Contains the main content of the application, structured into several sections:
  - **Input Container**: For user input to search for a city.
  - **Weather Info Section**: Displays current weather data and forecast.
  - **Search City Section**: A message prompting the user to search for a city.
  - **Not Found Section**: Displays a message when the city is not found.

## JavaScript Functionality
The JavaScript code handles user interactions and fetches weather data from the OpenWeatherMap API.

### Key Variables
- **DOM Elements**: 
  - `city_input`: Input field for city search.
  - `search_btn`: Button to trigger the search.
  - `Not_found_section`: Section displayed when a city is not found.
  - `Search_city_section`: Section prompting the user to search for a city.
  - `wheather_info_section`: Section displaying weather information.
  - Other variables for displaying weather data (temperature, humidity, wind speed, etc.).
- **API Key**: 
  - `api_key`: Stores the API key for accessing the OpenWeatherMap API.

### Key Functions
- **Event Listeners**:
  - Listens for click events on the search button and keydown events on the input field to trigger weather updates.
  
- **Data Fetching**:
  - `get_fetch_data(end_point, city)`: Fetches weather data from the OpenWeatherMap API and handles errors if the response is not OK.

- **Weather Icon Retrieval**:
  - `get_weather_Icon(id)`: Returns the appropriate weather icon based on the weather condition ID.

- **Date Formatting**:
  - `get_current_date()`: Returns the current date formatted for display.

- **Weather Information Update**:
  - `update_weather_info(city)`: Updates the displayed weather information based on the city input and calls `update_forecast_info(city)` to fetch and display the forecast.

- **Forecast Update**:
  - `update_forecast_info(city)`: Fetches and displays the weather forecast for the next days.
  - `update_forecast_items(weather_data)`: Updates the forecast items in the UI.

- **Display Section Management**:
  - `show_Display_section(section)`: Manages which section of the UI is displayed based on user actions.

## Usage
1. **Search for a City**:
   - Enter the name of a city in the input field and click the search button or press Enter.
   
2. **View Weather Information**:
   - The application will display the current weather conditions and a forecast for the next few days.

3. **Error Handling**:
   - If the city is not found, a "not found" message will be displayed.

## Conclusion
This Weather App provides a user-friendly interface for checking weather conditions and forecasts. The combination of HTML for structure and JavaScript for functionality allows for a dynamic and interactive experience. Users can easily search for any city and receive up-to-date weather information.