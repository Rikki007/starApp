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
                    <button class="sign-elements__item" data-sign="aries">Aries</button>
                    <button class="sign-elements__item" data-sign="leo">Leo</button>
                    <button class="sign-elements__item" data-sign="sagittarius">Sagittarius</button>
                </div>
            </div>

            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/water.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[1]}</h3>
                    <p class="container-item__description">${localization[lang].waterDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="cancer">Cancer</button>
                    <button class="sign-elements__item" data-sign="scorpio">Scorpio</button>
                    <button class="sign-elements__item" data-sign="pisces">Pisces</button>
                </div>
            </div>
        
            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/earth.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[2]}</h3>
                    <p class="container-item__description">${localization[lang].earthDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="taurus">Taurus</button>
                    <button class="sign-elements__item" data-sign="virgo">Virgo</button>
                    <button class="sign-elements__item" data-sign="capricorn">Capricorn</button>
                </div>
            </div>

            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/air.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">${localization[lang].element[3]}</h3>
                    <p class="container-item__description">${localization[lang].airDescription}</p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" data-sign="gemini">Gemini</button>
                    <button class="sign-elements__item" data-sign="libra">Libra</button>
                    <button class="sign-elements__item" data-sign="aquarius">Aquarius</button>
                </div>
            </div>
        </div>
        <div class="sign-description"></div>
    `
    zodiacButtons();

}

export default zodiacListCreate;