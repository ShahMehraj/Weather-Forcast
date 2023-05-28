function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "4acb99a4e7926b84bea439b402ac45fd"; // Replace with your actual API key
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          document.getElementById("weather-info").textContent = "City not found.";
        } else {
          const weatherInfo = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          `;
          document.getElementById("weather-info").innerHTML = weatherInfo;
        }
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
  