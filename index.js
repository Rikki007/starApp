import appBody from "./logReg/body.js";
import headerCreate from "./header/header.js";
import mainCreate from "./main/main.js";
import footerCreate from "./footer/footer.js";
import futureEventsAction from "./header/futureEventsAction.js";

document.addEventListener('DOMContentLoaded', () => {
    appBody.insertAdjacentHTML('afterbegin', headerCreate());
    appBody.insertAdjacentHTML('beforeend', mainCreate());
    appBody.insertAdjacentHTML('beforeend', footerCreate());
    futureEventsAction();
});
