import futureEvents from "./futureEvents.js";

const futureEventsAction = () => {
    const futureEventsButton = document.querySelector('.future-events');
    const spinner = document.querySelector('.loader-container');
    futureEventsButton.addEventListener('click', () => {
        futureEvents();
        spinner.classList.toggle('loader-container_disable');
        setTimeout(() => {
            spinner.classList.toggle('loader-container_disable');
        }, 1200);
    });     
}

export default futureEventsAction;