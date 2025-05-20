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

            <div class="banner-wrapper">
                <div class="banner">
                    <p class="banner__desc first-quote">Luory — ваш персональный астролог.</p>
                    <p class="banner__desc">Мы приглашаем вас раскрыть тайны истории и космоса.</p>
                    <p class="banner__desc">Познайте себя через яркую палитру взаимодействия небесных светил.</p>
                </div>
                <p class="banner__desc last-quote">Сделайте шаг к звездам вместе с Luory!</p>
            </div>
            
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

            <div/>

            <div class="main-wrapper-block quote-wrapper">
                <h3 class="quote__title">Идея для размышлений:</h3>
                <p class="qoute__description"></p>
            </div>
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