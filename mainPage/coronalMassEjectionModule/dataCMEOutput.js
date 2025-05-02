import coronalMassFormingData from "./coronalMassFormingData.js";
import numOfEjections from "./numOfEjections.js";
import averageSpeed from "./averageSpeed.js";
import arrivalDateCME from "./arrivalDateCME.js";
import conclusionCME from "./conclusionCME.js";
import glancingBlow from "./glancingBlow.js";
import straightBlow from "./straightBlow.js";

const dataCMEOutput = async () => {
    const solarDescription = document.querySelector(".solar__description");
    const data = await coronalMassFormingData();

    solarDescription.innerHTML = `
        <p class="block__description">За последние три дня произошло выбросов коронарных масс: ${numOfEjections(data)}.</p>
        <p class="block__description">Средняя скорость выбросов: ${averageSpeed(data)}км/с.</p>
        <p class="block__description">Количество выбросов направленных в сторону земли: ${arrivalDateCME(data)}.</p>
        <p class="block__description">Заключение: ${conclusionCME(data)}.</p>
    `

}

export default dataCMEOutput;