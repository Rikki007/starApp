import quotes from "./quote-data.js"
import randomizer from "./randomizer.js"

const selectQuote = () => {
    const qouteFromList = randomizer();
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    quote.textContent = quotes[qouteFromList][0];
    author.textContent = quotes[qouteFromList][1];
}

export default selectQuote;