const predictionWindow = (sign, data) => {
    const depricationSection = document.querySelector(".deprication-section");
    depricationSection.innerHTML = `
        <div class="back">
            <div class="window">
                <button class="back-button">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                </button>
                <h3 class="sign__title">Предсказание для ${sign}</h3>
                <p class="sign__date">${data}</p>
            </div>
        </div>
    `
}

export default predictionWindow;