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
            
            <div class="main-wrapper-block weather">
                <h3 class="solar-preview__title">Погода.</h3>
                <label class="block__city">
                    Введите город:
                    <input class="city__input"/>
                </label>
                <button class="weather-button">запрос погоды</button>
                <div class="main-wrapper-block weather_preview"></div>
            </div>

            <div class="main-wrapper-block solar-preview">
                <h3 class="solar-preview__title">Солнечная активность.</h3>
                <div class="solar-preview-box">
                    <img src="./assets/images/mainPage/sun.gif" class="solar-preview__pic" alt="solar-static"/>
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
                </div>

                <div class="main-wrapper-block">
                    <h3 class="earth-preview__title">Прогноз геомагнитной активности на завтра.</h3>
                    <p class="a-index__prediction"></p>
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
    dataCMEOutput();
    weatherAction();
    weatherLastResp();
    
};

export default mainPage;