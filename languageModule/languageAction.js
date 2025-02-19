import languageMenuCreate from "./languageMenuCreate.js";

const languageAction = () => {
    const languageButton = document.querySelector(".lang");
    languageButton.addEventListener('click', () => {
        languageMenuCreate();
    }) 
}

export default languageAction;