// API Key and Base URL for Weather Data
const weatherApiKey = "4f1cc2c0c01343bcb70121757252101";
const weatherBaseUrl = "http://api.weatherapi.com/v1/current.json";

// DOM Elements
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherCard = document.querySelector(".weather-card");
const cityNameElem = document.querySelector(".city-name");
const weatherTimeElem = document.querySelector(".weather-time");
const weatherDescElem = document.querySelector(".weather-description");
const temperatureElem = document.querySelector(".temperature");
const humidityElem = document.querySelector(".humidity");
const windSpeedElem = document.querySelector(".wind-speed");
const appContainer = document.querySelector(".app-container"); // For changing background

// Function to Fetch Weather Data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${weatherBaseUrl}?key=${weatherApiKey}&q=${city}&aqi=yes`);
    if (!response.ok) {
      throw new Error("Weather data not found");
    }
    const data = await response.json();
    updateWeatherCard(data);
    updateBackground(data); // Update background based on temperature
  } catch (error) {
    alert(error.message);
  }
}

// Function to Update the Weather Card
function updateWeatherCard(data) {
  cityNameElem.textContent = data.location.name;
  weatherTimeElem.textContent = `Local Time: ${data.location.localtime}`;
  weatherDescElem.textContent = data.current.condition.text;
  temperatureElem.textContent = `${data.current.temp_c}°C`;
  humidityElem.textContent = `Humidity: ${data.current.humidity}%`;
  windSpeedElem.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
  weatherCard.style.display = "block"; // Show the card
}

// Function to Update Background
function updateBackground(data) {
  const temperature = data.current.temp_c;

  if (temperature > 25) {
    appContainer.style.backgroundImage = "url('summer.jpg')"; 
  } else if (temperature < 5) {
    appContainer.style.backgroundImage = "url('winter.png')"; 
  } else {
    appContainer.style.backgroundImage = "url('spring.png')"; 
  }

  appContainer.style.backgroundSize = "cover";
  appContainer.style.backgroundPosition = "center";
}

// Event Listener for Search Button
searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

// Event Listener for Enter Key
cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
    } else {
      alert("Please enter a city name");
    }
  }
});

// Fetch weather for a default city (e.g., London)
fetchWeather("London");
