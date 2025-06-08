import getLanguage from "../localization/localizationUtils.js";
import localization from "./aboutLanguageData.js";

const about = () => {
    const lang = getLanguage();
    const main = document.querySelector(".main");
    console.log(localization[lang])
    main.innerHTML = `
        <section class="about">
            <div class="about-container">
                <h2 class="about-us-container__title">
                    ${localization[lang].usTitle}
                </h2>
                <p class="about-us-container__description text">
                    ${localization[lang].usDescription}
                </p>
                <div class="about-details about-container">
                    <h3 class="about-mission-container__title">
                        ${localization[lang].missionTitle}
                    </h3>
                    <p class="about-mission-container__description text">
                        ${localization[lang].missionDescription}
                    </p>
                </div>
                <div class="team-section about-container">
                    <h3 class="about-team-container__title">${localization[lang].teamTitle}</h3>
                    <p class="about-team-container__description text">
                        ${localization[lang].teamDescription}
                    </p>
                </div>
                <div class="about-container">
                    <h3>${localization[lang].connectTitle}</h3>
                    <div class="contact">
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
                </div>
                <div class="thanks-section about-container">
                    <h3 class="thanks-title">${localization[lang].thanksTitle}</h3>
                    <div class="contact">
                        <p class="thank-list">
                            Oreshkevich Y.
                        </p>
                        <p class="thank-list">
                            Oreshkevich I.
                        </p>
                        <p class="thank-list">
                            Juravlev I.
                        </p>
                        <p class="thank-list">
                            Medvedev A.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    ` 
}

export default about;