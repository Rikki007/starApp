import initializeTimeUpdater from "./initializeTimeUpdater.js";
import initializeWeatherButton from "./initializeWeatherButton.js";

const mainPage = () => {
    const main = document.querySelector(".main");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    main.innerHTML = `
        <section class="main-wrapper">
            <div class="main-wrapper-block time">
                <p id="current-date" class="block__description">Текущая дата: </p>
                <p id="current-time" class="block__description">Текущее время: </p>
            </div>
            <div class="main-wrapper-block weather">
                <button class="weather-button">запрос погоды</button>
                <p class="block__description temperature">Температура:</p>
                <p class="block__description humidity">Влажность:</p>
                <p class="block__description feelsLike">Ощущается:</p>
                <p class="block__description cloudiness">Облачность:</p>
                <p class="block__description precipitation"></p>
            </div>
            <div class="main-wrapper-block weather-preview">
                <img src="./assets/icons/weather/weatherAlert.svg" alt="weather picture" class="weather-preview__icon"/>
                <img src="./assets/icons/weather/cloud.svg" alt="weather picture" class="weather-preview__icon clouds"/>
                <img src="./assets/icons/weather/cloud.svg" alt="weather picture" class="weather-preview__icon clouds"/>
            </div>
            <div class="main-wrapper-block"></div>
        </section>

    `;

    initializeTimeUpdater();
    initializeWeatherButton(timeZone);

};

export default mainPage;