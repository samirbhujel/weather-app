async function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://www.metaweather.com/api/location/search/?query=${city}`;

  try {
    const cityResponse = await fetch(url);
    const cityData = await cityResponse.json();
    if (cityData.length > 0) {
      const woeid = cityData[0].woeid;
      const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
      const weatherData = await weatherResponse.json();

      document.getElementById("city-name").innerText = weatherData.title;
      document.getElementById("temperature").innerText = `Temperature: ${weatherData.consolidated_weather[0].the_temp.toFixed(1)} °C`;
      document.getElementById("description").innerText = `Weather: ${weatherData.consolidated_weather[0].weather_state_name}`;
      document.getElementById("humidity").innerText = `Humidity: ${weatherData.consolidated_weather[0].humidity}%`;
    } else {
      document.getElementById("weather-result").innerText = "City not found";
    }
  } catch (error) {
    document.getElementById("weather-result").innerText = "Error fetching data";
  }
}
