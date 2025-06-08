import getLanguage from "../localization/localizationUtils.js";
import localization from "./footerLanguageData.js";

const footerCreate = () => {
    const lang = getLanguage();
    return `
        <footer class="footer">

            <p class="footer__item">${localization[lang].creator}</p>

            <div class="footer-contacts">

                <p class="contacts">${localization[lang].contacts}</p>

                <a href="mailto:oreshaodnoglazy@gmail.com">
                    <img src="./assets/icons/contacts/mail.svg" alt="picture" class="footer-logo">
                </a>

                <a href="https://www.instagram.com/_Luory/" target="_blank">
                    <img src="./assets/icons/contacts/instagram.svg" alt="picture" class="footer-logo">
                </a>

            </div>

        </footer>
    `
}

export default footerCreate;