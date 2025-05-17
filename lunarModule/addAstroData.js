import chooseNeededAstroData from "./chooseNeededAstroData.js";

const addAstroData = async () => {
    const data = await chooseNeededAstroData();
    const constellation = document.querySelector(".constellation");
    const moonStatus = document.querySelector(".phase__name");
    moonStatus.textContent = `${data.moonSt}.`;
    constellation.textContent = `В созвездии ${data.constel}.`
}

export default addAstroData;