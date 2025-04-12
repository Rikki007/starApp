import quoteAction from "./dayQuoteModule/quoteAction.js";
import spaceWeatherData from "./sunFlaresModule/flaresStorm.js";
import getUtcOffset from "./moonCalender/utcOffset.js";
import solarLogic from "./sunFlaresModule/solarLogic.js";

const mainPage = () => {
    const main = document.querySelector(".main");
    const date = new Date();

    main.innerHTML = `
        <section class="main-wrapper">

            <div class="main-wrapper-block today">
                <p class="block__description today-date">Сегодня:</p>
            </div>
            
            <div class="main-wrapper-block weather">
                <label class="block__city">
                    Введите город:
                    <input class"city__input"/>
                </label>
                <button class="weather-button">запрос погоды</button>
                <p class="block__description temperature"></p>
                <p class="block__description humidity"></p>
                <p class="block__description feelsLike"></p>
            </div>

            <div class="main-wrapper-block weather-preview">
                <img src="./assets/icons/weather/weatherAlert.svg" alt="weather picture" class="weather-preview__icon"/>
                <img src="./assets/icons/weather/cloud.svg" alt="weather picture" class="weather-preview__icon clouds"/>
                <img src="./assets/icons/weather/cloud.svg" alt="weather picture" class="weather-preview__icon clouds"/>
            </div>

            <div class="main-wrapper-block solar-preview">
                <h3 class="solar-preview__title">Солнечная активность.</h3>
                <div class="solar-preview-box">
                    <img src="./assets/images/mainPage/sun.png" class="solar-preview__pic" alt="solar-static"/>
                    <img src="./assets/images/mainPage/sunAnimated.gif" class=" solar-preview__animation solar-preview__animation_deactive" alt="solar-animated"/>
                </div>
                <p class="solar-preview__description"></p>
            <div/>

            <div class="main-wrapper-block earth-preview">
                <h3 class="earth-preview__title">Геомагнитные бури.</h3>
                <p class="earth-preview__description"></p>
            <div/>

            <div class="main-wrapper-block quote-wrapper">
                <h3 class="quote__title">Идея для размышлений:</h3>
                <p class="qoute__description"></p>
            </div>

            <div class="main-wrapper-block"></div>
        </section>
    `;

    quoteAction();
    spaceWeatherData().then((data) => {
        console.log("Общие данные о космической погоде:", data);
    });
    getUtcOffset();
    solarLogic();
    

};

export default mainPage;