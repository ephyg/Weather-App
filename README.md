## **[WEATHER APP LINK](https://this-is-my-first-project.netlify.app/)**

### weather app that allows users to search for the weather information of a specific city. Here's an overview of what the code does:

- The getFormatedData function uses the axios library to make a GET request to the OpenWeatherMap API to retrieve weather data for a specific city.
- The App component contains the main logic of the weather app. It uses the useState hook to manage the input and weather state variables. The input state holds the user input for the city name, and the weather state holds the weather data for the selected city.
- The App component uses the useEffect hook to fetch weather data for a default city (Addis Ababa) when the component mounts and set the weather state with the fetched data.
- The App component also contains an input field where the user can enter the name of a city and search for its weather information. The user can either click the search button or press the Enter key to initiate the search.
- When the user searches for a city, the handleSearchClick function is called. This function calls the getFormatedData function with the user input as the argument to fetch the weather data for the specified city. If the request is successful, it sets the weather state with the fetched data and clears the input state.
- The App component also displays the weather information for the selected city. This information includes the temperature, minimum and maximum temperature, pressure, humidity, wind speed, country, description, name, and coordinates of the city. The weather information is displayed in a formatted way using the Properties component.
- The App component also displays the current date and time in the weather information section.
Overall, the app allows users to search for the weather information of a specific city and displays the information in a formatted way.