import quotes from "./quotesData.js";
import getDayOfYear from "./getDayOfYear.js";

const quoteChooser = () => {
    const dayFromStartOfYear = getDayOfYear();
    let quote;
    if (dayFromStartOfYear <= 183) {
        quote = quotes.ru[dayFromStartOfYear];
    }
    if (dayFromStartOfYear > 183) {
        const halfDay = Math.floor(dayFromStartOfYear / 2);
        quote = quotes.ru[halfDay];
    }
    return quote;
}

export default quoteChooser;