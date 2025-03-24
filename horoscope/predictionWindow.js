import windowCloser from "./windowCloser.js";

const predictionWindow = (sign, data) => {
    const depricationSection = document.querySelector(".deprication-section");
    const deleteAsterisk = data.replace(/\*\*/g, '');
    document.body.classList.toggle("scroll_lock");

    depricationSection.innerHTML = `
        <div class="back">
            <div class="window">
                <button class="back-button predWin">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                </button>
                <h3 class="sign__title">Предсказание для ${sign}</h3>
                <p class="sign__date">${deleteAsterisk}</p>
            </div>
        </div>
    `
    windowCloser(depricationSection);
}

export default predictionWindow;