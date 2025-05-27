import chooseNeededAstroData from "./chooseNeededAstroData.js";

const addAstroData = async () => {
    const data = await chooseNeededAstroData();
    const constellation = document.querySelector(".constellation");
    const moonStatus = document.querySelector(".phase__name");
    const fullmoonNewmoon = document.querySelector(".fullmoon-newmoon");
    const moonSignInteraction = document.querySelector(".info-container-moon-interaction");
    fullmoonNewmoon.textContent = `${data.fullmoon}`;
    moonStatus.textContent = `${data.moonSt}.`;
    constellation.textContent = `В созвездии ${data.constel}.`;
    moonSignInteraction.textContent = `${data.signInteraction}.`;

}

export default addAstroData;