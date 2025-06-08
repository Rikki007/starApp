import getLanguage from "../localization/localizationUtils.js";
import quotes from "./quote-data.js"
import randomizer from "./randomizer.js"

const selectQuote = () => {
    const qouteFromList = randomizer();
    const lang = getLanguage();
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    quote.textContent = quotes[lang][qouteFromList][0];
    author.textContent = quotes[lang][qouteFromList][1];
}

export default selectQuote;