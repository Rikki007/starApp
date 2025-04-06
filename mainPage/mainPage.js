import quoteAction from "./dayQuoteModule/quoteAction.js";

const mainPage = () => {
    const main = document.querySelector(".main");
    const date = new Date();

    main.innerHTML = `
        <section class="main-wrapper">
            <div class="main-wrapper-block quote-wrapper">
                <p class="block__description today-date">Сегодня:</p>
                <h3 class="quote__title">Идея для размышлений:</h3>
                <p class="qoute__description"></p>
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
            <div class="main-wrapper-block"></div>
        </section>
    `;

    quoteAction();
    

};

export default mainPage;