// API Key and Base URL for Weather Data
const weatherApiKey = "Api Key Is Hide For Security Purpose";
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


function updateWeatherCard(data) {
  cityNameElem.textContent = data.location.name;
  weatherTimeElem.textContent = `Local Time: ${data.location.localtime}`;
  weatherDescElem.textContent = data.current.condition.text;
  temperatureElem.textContent = `${data.current.temp_c}°C`;
  humidityElem.textContent = `Humidity: ${data.current.humidity}%`;
  windSpeedElem.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
  weatherCard.style.display = "block"; // Show the card
}


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


searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name");
  }
});


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
