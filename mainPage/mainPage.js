import localization from "./mainPageLanguageData.js";
import getLanguage from "../localization/localizationUtils.js";
import navigation from "./navigation.js";

const mainPage = () => {

    const lang = getLanguage();
    const main = document.querySelector(".main");

    main.innerHTML = `
        <section class="main-wrapper">
        
            <div class="back-image"></div>

            <div class="back-image-bottom"></div>

            <div class="banner-wrapper">
                <div class="banner">
                    <p class="banner__desc first-quote">
                        ${localization[lang].bannerFirst}
                    </p>
                    <p class="banner__desc">
                        ${localization[lang].bannerSecond}
                    </p>
                    <p class="banner__desc">
                        ${localization[lang].bannerThird}
                    </p>
                </div>
                <p class="banner__desc last-quote">
                    ${localization[lang].bannerLast}
                </p>
            </div>

            <section class="section-item">
                <h2 class="item__title banner__desc">
                    ${localization[lang].starDanceTitle}
                </h2>
                <p class="item__description">
                    ${localization[lang].starDanceDescription}
                </p>
                <div class="section-item-wrapper">

                    <div class="section-item-wrapper-discription">

                        <div class="simple-wrapper">
                            <p class="item__description">
                                ${localization[lang].moonLinkDescription}
                            </p>
                            <button class="navbar__item simple-wrapper__button" data-btn="phase">
                                ${localization[lang].moonLinkBtn}
                            </button>
                        </div>
                        
                        <div class="simple-wrapper">
                            <p class="item__description">
                                ${localization[lang].eventsLinkDescription}
                            </p>
                            <button class="navbar__item simple-wrapper__button" data-btn="events">
                                ${localization[lang].eventsLinkBtn}
                            </button>
                        </div>

                    </div>

                    <img src="./assets/images/mainPage/galaxy.png" class="section-item-wrapper__image" alt="galaxy"

                </div>
            </section>

            <section class="section-item signs-and-interaction">
                <h2 class="item__title banner__desc">
                    ${localization[lang].constellationTitle}
                </h2>
                <p class="item__description">
                    ${localization[lang].constellationDescription}
                </p>
                <div class="section-item-wrapper">

                    <div class="section-item-wrapper-discription">

                        <div class="simple-wrapper">
                            <p class="item__description">
                                ${localization[lang].signsLinkDescription}
                            </p>
                            <button class="navbar__item simple-wrapper__button" data-btn="signs">
                                ${localization[lang].signsLinkBtn}
                            </button>
                        </div>
                        
                        <div class="simple-wrapper">
                            <p class="item__description">
                                ${localization[lang].interactionLinkDescription}
                            </p>
                            <button class="navbar__item simple-wrapper__button" data-btn="interactions">
                                ${localization[lang].interactionLinkBtn}
                            </button>
                        </div>

                        <div class="simple-wrapper">
                            <p class="item__description">
                                ${localization[lang].horoscopeLinkDescription}
                            </p>
                            <button class="navbar__item simple-wrapper__button" data-btn="horoscope">
                                ${localization[lang].horoscopeLinkBtn}
                            </button>
                        </div>
                    
                    </div>

                    <div class="picture-container">

                        <img src="./assets/images/mainPage/stars4.png" class="picture-container__image sky-img" alt="stars"/>

                        <img src="./assets/images/mainPage/moon1.png" class="picture-container__image moon-img" alt="moon"/>

                        <img src="./assets/images/mainPage/cloud2.png" class="picture-container__image cloud-img" alt="cloud"/>

                        <img src="./assets/images/mainPage/girlOnField.png" class="picture-container__image observer-img" alt="observer"/>

                    </div>

                    

                </div>
            </section>

            <section class="section-item">
                <h2 class="item__title banner__desc">
                    ${localization[lang].contactsTitle}
                </h2>
                <div class="contact main-page-contact">
                        <p class="network-link">
                            ${localization[lang].mail} 
                            <a href="mailto:oreshaodnoglazy@gmail.com">
                                <img src="./assets/icons/contacts/mail.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            ${localization[lang].instagram}  
                            <a href="https://www.instagram.com/_Luory/" target="_blank">
                                <img src="./assets/icons/contacts/instagram.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            ${localization[lang].threads}  
                            <a href="https://www.threads.net/@_luory/" target="_blank">
                                <img src="./assets/icons/contacts/threads.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            ${localization[lang].telegram}  
                            <a href="https://t.me/luoryChanel" target="_blank">
                                <img src="./assets/icons/contacts/telegram-svgrepo-com.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                    </div>
            </section>

        </section>
    `;

    navigation();
    
};

export default mainPage;