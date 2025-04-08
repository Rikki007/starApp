import quoteAction from "./dayQuoteModule/quoteAction.js";
import spaceWeatherData from "./sunFlaresModule/flaresStorm.js";

const mainPage = () => {
    const main = document.querySelector(".main");
    const date = new Date();

    main.innerHTML = `
        <section class="main-wrapper">
            
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
                <img src="./assets/images/mainPage/sun.png" class="solar-preview__pic" alt="solar-static"/>
                <img src="./assets/images/mainPage/sunAnimated.gif" class="solar-preview__animation" alt="solar-animated"/>
                <p class="solar-preview__description"></p>
            <div/>

            <div class="main-wrapper-block earth-preview">
                <h3 class="earth-preview__title">Геомагнитные бури.</h3>
                <img src="./assets/images/mainPage/earth.png" class="earth-preview__pic" alt="earth-static"/>
                <img src="./assets/images/mainPage/earthAnimated.gif" class="earth-preview__animation" alt="earth-animated"/>
                <p class="earth-preview__description"></p>
            <div/>

            <div class="main-wrapper-block quote-wrapper">
                <p class="block__description today-date">Сегодня:</p>
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
    

};

export default mainPage;