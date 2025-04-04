import updateWeatherIcon from "./updateWeatherIcon.js";

const processWeatherData = (data, currentTime) => {
    const sunRise = data.daily.sunrise[0].split("T")[1];
    const sunSet = data.daily.sunset[0].split("T")[1];
    const hours = currentTime.getHours();
    
    // Обновление иконок
    updateWeatherIcon(data, currentTime, sunRise, sunSet);

    // Обновление текстовых данных
    return {
        temperature: `Температура: ${Math.floor(data.hourly.temperature_2m[hours])}${data.hourly_units.temperature_2m}`,
        humidity: `Влажность: ${data.hourly.relative_humidity_2m[hours]}${data.hourly_units.relative_humidity_2m}`,
        feelsLike: `Ощущается как: ${Math.floor(data.hourly.apparent_temperature[hours])}${data.hourly_units.apparent_temperature}`,
        cloudiness: `Облачность: ${data.hourly.cloud_cover[hours]}${data.hourly_units.cloud_cover}`,
    };
};

export default processWeatherData;