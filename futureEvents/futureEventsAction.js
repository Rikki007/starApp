import openPage from "../mainPage/openPage.js";
import futureEvents from "./futureEvents.js";

const futureEventsAction = () => {
    const futureEventsButton = document.querySelector('.future-events');
    futureEventsButton.addEventListener('click', () => {
        openPage(futureEvents);
    });     
}

export default futureEventsAction;