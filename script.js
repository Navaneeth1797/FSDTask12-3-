function getWeatherData(cityName) {
  const apiKey = "7bc5de981b938a24f9ec6fadf74beec5";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(weatherApiUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      const container = document.getElementById("weatherContainer");
      container.innerHTML = `
            <p><b>City:</b> ${weatherData.name}</p>
            <p><b>Temperature:</b> ${weatherData.main.temp}°C</p>
            <p><b>Humidity:</b> ${weatherData.main.humidity}%</p>
            <p><b>Description:</b> ${weatherData.weather[0].description}</p>
          `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data.");
    });
}

document.getElementById("searchBtn").addEventListener("click", function () {
  const cityName = prompt("Enter the city name:");
  if (cityName) {
    getWeatherData(cityName);
  }
});
