import preview from "./preview.js";
import pastePic from "./pastePic.js";
import addAstroData from "./addAstroData.js";
import preloader from "./preloader.js";
import localization from "./lunarLanguageData.js";
import getLanguage from "../localization/localizationUtils.js";


function updateLunarPhase() {

    const lang = getLanguage();
    const main = document.querySelector('.main');

    main.innerHTML = `
        <section class="lunar-section">
            <div class="lunar-section-phase-info">
                <h2 class="phase-info__title">${localization[lang].phaseTitle}</h2>
                <div class="info-container">
                    <img src="#" class="phase-info__pic" alt="moon picture"/>
                    <div class="phase-info-moon-data">
                        <p class="phase-info__description fullmoon-newmoon"></p>
                        <p class="phase-info__description phase__name"></p>
                        <p class="phase-info__description constellation"></p>
                    </div>
                    <div class="lunar-preloader preloader-hide">
                        <img src="./assets/images/preloader.gif" class="loader" alt="loader"/>
                    </div>
                </div>
                <p class="info-container-moon-interaction narration__description"></p>
            </div>
            
            <div class="lunar-section-wrapper">
                <h2 class="phase-info__title">
                    ${localization[lang].commonInfoTitle}
                </h2>
                <div class="lunar-info">
                    <div class="narration">
                        <p class="narration__description">
                            ${localization[lang].commonInfoDescFirst}
                        </p>
                        <p class="narration__description">
                            ${localization[lang].commonInfoDescSecond}
                        </p>
                        <p class="narration__description">
                            ${localization[lang].commonInfoDescLast}
                        </p>
                    </div>
                    <div class="prewiev">
                
                        <img src="./assets/images/moon/lunarCycle0.png" alt="moon picture" class="preview__picture"/>
                        <button class="preview__button navbar__item">
                            ${localization[lang].cycleButton}
                        </button>

                    </div>
                </div>

                <h2 class="phase-info__title">
                    ${localization[lang].moonHistoryTitle}
                </h2>

                <div class="lunar-info">
                    <div class="prewiev">
                        <img src="./assets/images/moon/lunarMyth.png" alt="moon picture" class="prewiev__image"/>
                    </div>
                    
                    <div class="narration">

                        <p class="narration__description">
                            ${localization[lang].moonHistoryDescFirst}
                        </p>
                        <p class="narration__description">
                            ${localization[lang].moonHistoryDescSecond}
                        </p>
                        <p class="narration__description">
                            ${localization[lang].moonHistoryDescLast}
                        </p>

                    </div>
                    
                </div>
            </div>
            
        </section>
    `;

    preloader();
    addAstroData();
    pastePic();
    preview();
}

export default updateLunarPhase;