import getGeolocation from "./getGeolocation.js";
import processWeatherData from "./processWeatherData.js";

const initializeWeatherButton = (timeZone) => {
    const weatherButton = document.querySelector(".weather-button");
    
    weatherButton.addEventListener('click', async () => {
        try {
            const coords = await getGeolocation();
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=sunrise,sunset&hourly=relative_humidity_2m,temperature_2m,apparent_temperature,cloud_cover,rain,snowfall&forecast_days=1&timezone=${timeZone}`);
            const data = await response.json();
            const currentTime = new Date();
            
            const weatherData = processWeatherData(data, currentTime);
            

            document.querySelector(".temperature").textContent = weatherData.temperature;
            document.querySelector(".humidity").textContent = weatherData.humidity;
            document.querySelector(".feelsLike").textContent = weatherData.feelsLike;
            document.querySelector(".cloudiness").textContent = weatherData.cloudiness;
            // document.querySelector(".precipitation")
            
            
        } catch (error) {
            console.error("Ошибка:", error);
        }
    });
};

export default initializeWeatherButton;
