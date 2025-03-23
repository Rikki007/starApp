import localization from "../localization/localizationData.js";
import getLanguage from "../localization/localizationUtils.js";
import languageLogo from "../languageModule/languageLogo.js";

const headerCreate = () => {
    
    const lang = getLanguage();

    return `
        <header class="header">
            
            <div class="header__item content">
                <div class="logo-container">

                    <img src="./assets/images/lunarOracleLogo.png" alt="logo picture" class="logo-container__image">
                    <h1 class="logo-container__title">Luory</h1>

                </div>

                <button class="burger-button">
                    <span class="burger-line line-first"></span>
                    <span class="burger-line line-second"></span>
                    <span class="burger-line line-third"></span>
                </button>

                <nav class="navbar navbar-close">

                    <ul class="navbar__list">

                        <li class="navbar__item head-list moon-position">
                            ${localization[lang].header.buttons.position}
                        </li>
                        <li class="navbar__item head-list future-events">
                            ${localization[lang].header.buttons.events}
                        </li>
                        <li class="navbar__item head-list zodiac-description">
                            ${localization[lang].header.buttons.zodiac}
                        </li>
                        <li class="navbar__item head-list horoscope">
                            ${localization[lang].header.buttons.horoscope}
                        </li>
                        
                    </ul>

                </nav>
            </div>

            <div class="header__item lang">

                <div class="settings-container">${languageLogo()}</div>
                
                <div class="slide-menu slide-menu_deactive">

                    <nav class="slide-menu-container">
                    
                        <ul class="container-list">

                            <li class="container-list-item en">
                                <img src="./assets/images/localization/eng.png" class="item__pic" alt="eng"/>
                                <p class="item__language">english</p>
                            </li>

                            <li class="container-list-item ru">
                                <img src="./assets/images/localization/ru.png" class="item__pic" alt="ru"/>
                                <p class="item__language">русский</p>
                            </li>

                            <li class="container-list-item cz">
                                <img src="./assets/images/localization/cz.png" class="item__pic" alt="cz"/>
                                <p class="item__language">čeština</p>
                            </li>

                        </ul>

                    </nav>

                </div>

            </div>
            

        </header>
    `

}

export default headerCreate;