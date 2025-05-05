import weatherRequest from "./weatherRequest.js"
import codesRu from "./weatherDataCodesRu.js";

const weatherPreview = async (city) => {
    const weatherPreview = document.querySelector(".weather_preview");
    const data = await weatherRequest(city);
    localStorage.setItem('lastRespCity', `${city}`);
    const description = codesRu.find(item => {
        return item.code === data.current.condition.code;
    });
    let weatherDescription;
    data.current.is_day === 0 ? weatherDescription = description.night : weatherDescription = description.day;
    weatherPreview.innerHTML = `
        <p class="block__description weather__common-description last-resp"></p>
        <img src="${data.current.condition.icon}" class="weather__icon" alt="weather icon"/>
        <p class="block__description weather__common-description">${weatherDescription}.</p>
        <p class="block__description temperature">Температура воздуха: ${Math.floor(data.current.temp_c)} °C.</p>
        <p class="block__description feelsLike">Ощущается: ${Math.floor(data.current.feelslike_c)} °C.</p>
        <p class="block__description humidity">Влажность: ${data.current.humidity} %</p>
        <p class="block__description wind">Скорость ветра: ${Math.floor(data.current.wind_kph)} км/ч.</p>
    `

}

export default weatherPreview;