import quoteAction from "./dayQuoteModule/quoteAction.js";
import getUtcOffset from "./moonCalender/utcOffset.js";
import solarLogic from "./coronalMassEjectionModule/solarLogic.js";
import geomagneticActivity from "./geomagneticActivity/geomagneticActivity.js";
import kpIndexEstimatedPreview from "./geomagneticActivity/kpIndexEstimatedPreview.js";
import kpIndexNowPreview from "./geomagneticActivity/kpIndexNowPreview.js";
import geomagneticAnalysisPreview from "./geomagneticAnalysis/geomagneticAnalysisPreview.js";
import coronalMassFormingData from "./coronalMassEjectionModule/coronalMassFormingData.js";
import dataCMEOutput from "./coronalMassEjectionModule/dataCMEOutput.js";

const mainPage = () => {
    const main = document.querySelector(".main");

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
                <div class="main-wrapper-block solar__description"></div>
            <div/>

            <div class="main-wrapper-block earth-preview">
                <div class="main-wrapper-block">
                    <h3 class="earth-preview__title">Геомагнитная активность сейчас.</h3>
                    <div class="kp-index-wrapper">
                        <div class="signal-light kp-index__signal"></div>
                        <p class="kp-index__now"></p>
                    </div>
                    <p class="kp-index__estimated"></p>
                </div>

                <div class="main-wrapper-block">
                    <h3 class="earth-preview__title">Прогноз геомагнитной активности на завтра.</h3>
                    <div class="kp-index-wrapper">
                        <div class="signal-light a-index__signal"></div>
                        <p class="a-index__prediction"></p>
                    </div>
                </div>
                
            <div/>

            <div class="main-wrapper-block quote-wrapper">
                <h3 class="quote__title">Идея для размышлений:</h3>
                <p class="qoute__description"></p>
            </div>

            <div class="main-wrapper-block"></div>
        </section>
    `;

    quoteAction();
    coronalMassFormingData();
    geomagneticActivity();
    geomagneticAnalysisPreview();
    kpIndexNowPreview();
    kpIndexEstimatedPreview();
    getUtcOffset();
    solarLogic();
    dataCMEOutput();
    
};

export default mainPage;