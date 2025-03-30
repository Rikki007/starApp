import appBody from "./body.js";
import headerCreate from "./header/header.js";
import mainCreate from "./main/main.js";
import footerCreate from "./footer/footer.js";
import futureEventsAction from "./futureEvents/futureEventsAction.js";
import lunarAction from "./lunarModule/lunarAction.js";
import horoscopeAction from "./horoscope/horoscopeAction.js";
import zodiacListAction from "./zodiacDescription/zodiacListAction.js";
import interactionAction from "./interaction/interactionAction.js";
import aboutAction from "./about/aboutAction.js";
import preloader from "./preloader/preloader.js";
import languageAction from "./languageModule/languageAction.js";
import burgerShow from "./header/burgerShow.js";

document.addEventListener('DOMContentLoaded', () => {
    appBody.insertAdjacentHTML('afterbegin', preloader());
    appBody.insertAdjacentHTML('afterbegin', headerCreate());
    burgerShow();
    appBody.insertAdjacentHTML('beforeend', mainCreate());
    appBody.insertAdjacentHTML('beforeend', footerCreate());
    futureEventsAction();
    lunarAction();
    zodiacListAction();
    horoscopeAction();
    aboutAction();
    interactionAction();
    languageAction();
});
