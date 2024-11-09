document.addEventListener("DOMContentLoaded", function() {
  async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();

    if (!city || !state) {
      document.getElementById("weather-result").innerText = "Please enter both city and state.";
      return;
    }

    const apiKey = "574026fca161e646db8b0309eb7de0d0"; // OpenWeatherMap API key
    const query = `${city},${state}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

    try {
      const weatherResponse = await fetch(url);
      const weatherData = await weatherResponse.json();

      if (weatherData.cod === 200) {
        document.getElementById("city-name").innerText = weatherData.name;
        document.getElementById("temperature").innerText = `Temperature: ${weatherData.main.temp.toFixed(1)} °C`;
        document.getElementById("description").innerText = `Weather: ${weatherData.weather[0].description}`;
        document.getElementById("humidity").innerText = `Humidity: ${weatherData.main.humidity}%`;

        // Reset all weather effects
        document.querySelector('.rain').style.display = 'none';
        document.querySelector('.snow').style.display = 'none';
        document.querySelector('.clouds').style.display = 'none';
        document.querySelector('.lightning').style.display = 'none';

        // Check for weather condition and show corresponding effect
        if (weatherData.weather[0].main.toLowerCase() === 'rain') {
          document.querySelector('.rain').style.display = 'block';
        } else if (weatherData.weather[0].main.toLowerCase() === 'snow') {
          document.querySelector('.snow').style.display = 'block';
        } else if (weatherData.weather[0].main.toLowerCase() === 'clouds') {
          document.querySelector('.clouds').style.display = 'block';
        } else if (weatherData.weather[0].main.toLowerCase() === 'thunderstorm') {
          document.querySelector('.lightning').style.display = 'block';
        }
      } else {
        document.getElementById("weather-result").innerText = `No data found for ${query}. Error: ${weatherData.message || 'Unknown'}`;
      }
    } catch (error) {
      document.getElementById("weather-result").innerText = `Error fetching data. Please try again. ${error.message}`;
    }
  }
});
