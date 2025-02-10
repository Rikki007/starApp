import headerCreate from "./header.js";
import futureEvents from "../futureEvents/futureEvents.js";

const futureEventsAction = () => {
    const futureEventsButton = document.querySelector('.future-events');
    futureEventsButton.addEventListener('click', futureEvents)
}

export default futureEventsAction;