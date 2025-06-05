import openPage from "../mainPage/openPage.js";
import interaction from "./interaction.js";

const interactionAction = () => {
    const interactionButton = document.querySelector('.sign-interaction');
    interactionButton.addEventListener('click', () => {
        openPage(interaction);
    }) 
}

export default interactionAction;