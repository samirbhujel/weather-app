async function getWeather() {
  // Placeholder data
  const city = "New York";
  const temperature = "20°C";
  const description = "Clear Sky";
  const humidity = "55%";
  const windSpeed = "10 km/h";

  // Update UI
  document.getElementById("city").innerText = city;
  document.getElementById("temperature").innerText = temperature;
  document.getElementById("description").innerText = description;
  document.getElementById("humidity").innerText = humidity;
  document.getElementById("wind-speed").innerText = windSpeed;

  // Log for debugging
  console.log("Weather updated");
}
