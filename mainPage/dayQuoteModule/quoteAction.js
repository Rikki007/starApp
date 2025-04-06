import quoteChooser from "./quoteChooser.js";

const quoteAction = () => {
    const ideaForThought = document.querySelector(".qoute__description");
    ideaForThought.textContent = quoteChooser();
}

export default quoteAction;