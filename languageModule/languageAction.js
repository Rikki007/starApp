import languageCreate from "./languageCreate.js";

const languageAction = () => {
    const languageButton = document.querySelector(".lang");
    languageButton.addEventListener('click', () => {
        languageCreate();
    }) 
}

export default languageAction;