import quoteAction from "./dayQuoteModule/quoteAction.js";
import geomagneticActivity from "./geomagneticActivity/geomagneticActivity.js";
import kpIndexNowPreview from "./geomagneticActivity/kpIndexNowPreview.js";
import geomagneticAnalysisPreview from "./geomagneticAnalysis/geomagneticAnalysisPreview.js";
import coronalMassFormingData from "./coronalMassEjectionModule/coronalMassFormingData.js";
import dataCMEOutput from "./coronalMassEjectionModule/dataCMEOutput.js";
import weatherAction from "./weatherModule/weatherAction.js";
import weatherLastResp from "./weatherModule/weatherLastResp.js";

const mainPage = () => {
    const main = document.querySelector(".main");

    main.innerHTML = `
        <section class="main-wrapper">
        
            <div class="back-image">
                <div class="comet"></div>
            </div>

            <div class="back-image-bottom"></div>

            <div class="banner-wrapper">
                <div class="banner">
                    <p class="banner__desc first-quote">Luory — ваш персональный астролог.</p>
                    <p class="banner__desc">Мы приглашаем вас раскрыть тайны космоса.</p>
                    <p class="banner__desc">Познайте себя через взаимодействие небесных тел.</p>
                </div>
                <p class="banner__desc last-quote">Сделайте шаг к звездам вместе с Luory!</p>
            </div>
            <div class="hide">
            <div class="main-wrapper-block weather">
                <h3 class="solar-preview__title">Погода.</h3>
                <div class="weather-description">
                    <div class="city-wrapper">
                        <label class="block__city">
                            Введите город:&nbsp
                            <input class="city__input"/>
                        </label>
                        <button class="navbar__item weather-button">запрос погоды</button>
                    </div>
                    <div class="weather-data-wrapper weather_preview"></div>
                </div>
            </div>

            <div class="solar-preview">
                <h3 class="solar-preview__title">Солнечная активность.</h3>
                <div class="solar-main-data">
                    <div class="solar-preview-box">
                        <img src="./assets/images/mainPage/sun.gif" class="solar-preview__pic" alt="solar-static"/>
                    </div>
                    <div class="solar__description"></div>
                </div>
            </div>

            <div class="main-wrapper-block earth-preview">

                <h3 class="earth-preview__title">Геомагнитная активность.</h3>
                <div class="earth-activity">
                    
                    <div class="kp-index-wrapper">
                        <div class="signal-light kp-index__signal"></div>
                        <p class="kp-index__now"></p>
                    </div>

                    <div class="kp-index-wrapper">
                        <div class="signal-predict"></div>
                        <p class="earth-preview__title">Прогноз на завтра:</p>
                        <p class="a-index__prediction"></p>
                    </div>

                </div>

            </div>

            <div class="main-wrapper-block quote-wrapper">
                <h3 class="quote__title">Идея для размышлений:</h3>
                <p class="qoute__description"></p>
            </div>
            </div>

            <section class="section-item">
                <h2 class="item__title banner__desc">Танец звезд и луны: что ждет впереди?</h2>
                <p class="item__description">
                    Космос движется в вечном ритме. Вселенная рождается, расширяется, угасает и возрождается вновь. Всё уже было, всё исчезнет и вернётся снова в бесконечном цикле.
                </p>
                <div class="section-item-wrapper">

                    <div class="section-item-wrapper-discription">

                        <div class="simple-wrapper">
                            <p class="item__description">Откройте тайны грядущего — исследуйте положение Луны и ее значение.</p>
                            <button class="navbar__item">Положение луны</button>
                        </div>
                        
                        <div class="simple-wrapper">
                            <p class="item__description">Грядущие события оказывают на нас влияние. Узнайте о том, что скоро случится.</p>
                            <button class="navbar__item">События</button>
                        </div>

                    </div>

                    <img src="./assets/images/mainPage/galaxy.png" class="section-item-wrapper__image" alt="galaxy"

                </div>
            </section>

            <section class="section-item signs-and-interaction">
                <h2 class="item__title banner__desc">Созвездия судьбы: магия знаков и их взаимодействие.</h2>
                <p class="item__description">
                    Откройте завесу тайны влияния созвездий! Узнайте, как знаки зодиака формируют вашу судьбу и какие астрологические взаимодействия определяют гармонию и баланс. Выберите путь понимания — загляните в описание знаков или исследуйте их взаимосвязь. Звезды говорят — осталось лишь услышать их. Исследуйте влияние знаков и их магию!
                </p>
                <div class="section-item-wrapper">

                    <div class="section-item-wrapper-discription">

                        <div class="simple-wrapper">
                            <p class="item__description">Откройте для себя тайны знаков зодиака.</p>
                            <button class="navbar__item">Исследовать знаки</button>
                        </div>
                        
                        <div class="simple-wrapper">
                            <p class="item__description">Узнайте, как взаимодействуют знаки между собой.</p>
                            <button class="navbar__item">Открыть взаимосвязи</button>
                        </div>
                    
                    </div>

                    <div class="picture-container">

                        <img src="./assets/images/mainPage/stars4.png" class="picture-container__image sky-img" alt="observer"/>

                        <img src="./assets/images/mainPage/moon1.png" class="picture-container__image moon-img" alt="observer"/>

                        <img src="./assets/images/mainPage/cloud2.png" class="picture-container__image cloud-img" alt="observer"/>

                        <img src="./assets/images/mainPage/girlOnField.png" class="picture-container__image observer-img" alt="observer"/>

                    </div>

                    

                </div>
            </section>

            <section class="section-item">
                <h2 class="item__title banner__desc">Судьба написана звёздами, остается пройти этот путь.</h2>
                <div class="simple-wrapper">
                    <p class="item__description">
                        Звёзды указали направление, как пройти этот путь — выбор за тобой. Загляни в гороскоп на месяц и узнай, какие события ждут впереди.
                    </p>
                    <button class="navbar__item">Гороскоп</button>
                </div>
            </section>

        </section>
    `;

    quoteAction();
    coronalMassFormingData();
    geomagneticActivity();
    geomagneticAnalysisPreview();
    kpIndexNowPreview();
    dataCMEOutput();
    weatherAction();
    weatherLastResp();
    
};

export default mainPage;