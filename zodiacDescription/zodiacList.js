import getLanguage from "../localization/localizationUtils.js";
import localization from "./zodiacListLanguageData.js";
import zodiacButtons from "./zodiacButtons.js";

const zodiacListCreate = () => {
    const lang = getLanguage();
    const main = document.querySelector('.main')
    main.innerHTML = `
        <div class="elements-container">
            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/fire.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[0]}</h3>
                    <p class="container-item__description">${localization[lang].fireDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="aries">${localization[lang].buttons[0]}</button>
                    <button class="sign-elements__item" data-sign="leo">${localization[lang].buttons[1]}</button>
                    <button class="sign-elements__item" data-sign="sagittarius">${localization[lang].buttons[2]}</button>
                </div>
            </div>

            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/water.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[1]}</h3>
                    <p class="container-item__description">${localization[lang].waterDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="cancer">${localization[lang].buttons[3]}</button>
                    <button class="sign-elements__item" data-sign="scorpio">${localization[lang].buttons[4]}</button>
                    <button class="sign-elements__item" data-sign="pisces">${localization[lang].buttons[5]}</button>
                </div>
            </div>
        
            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/earth.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[2]}</h3>
                    <p class="container-item__description">${localization[lang].earthDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="taurus">${localization[lang].buttons[6]}</button>
                    <button class="sign-elements__item" data-sign="virgo">${localization[lang].buttons[7]}</button>
                    <button class="sign-elements__item" data-sign="capricorn">${localization[lang].buttons[8]}</button>
                </div>
            </div>

            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/air.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[3]}</h3>
                    <p class="container-item__description">${localization[lang].airDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="gemini">${localization[lang].buttons[9]}</button>
                    <button class="sign-elements__item" data-sign="libra">${localization[lang].buttons[10]}</button>
                    <button class="sign-elements__item" data-sign="aquarius">${localization[lang].buttons[11]}</button>
                </div>
            </div>
        </div>
        <div class="sign-description"></div>
    `
    zodiacButtons();

}

export default zodiacListCreate;