import isDayTime from "./isDayTime.js";
import updateClouds from "./updateClouds.js";

const updateWeatherIcon = (data, currentTime, sunRise, sunSet) => {
    const hours = currentTime.getHours();
    const weatherIcon = document.querySelector(".weather-preview__icon");
    const clouds = document.querySelectorAll(".clouds");
    const cloudCover = data.hourly.cloud_cover[hours];
    
    const isDay = isDayTime(currentTime, sunRise, sunSet);
    const basePath = "./assets/icons/weather/";

    clouds.forEach(cloud => cloud.classList.remove('cloud1', 'cloud2'));

    if (cloudCover < 80) {
        weatherIcon.src = `${basePath}${isDay ? 'day' : 'night'}Clear.svg`;
    } else if (cloudCover >= 80 && cloudCover < 85) {
        weatherIcon.src = `${basePath}${isDay ? 'day' : 'night'}Clear.svg`;
        updateClouds(clouds, true);
    } else if (cloudCover >= 85) {
        weatherIcon.src = `${basePath}${isDay ? 'day' : 'night'}Cloudy.svg`;
    }
};

export default updateWeatherIcon;