import languageButtonChange from "./languageButtonChange.js";

const languageLogo = () => {
    return `
        <img src="${languageButtonChange()}" class="settings" alt="language picture"/>
    `
}

export default languageLogo;