const predictionWindow = (sign, data) => {
    return `
        <div class="back">
            <div class="window">
                <h3 class="sign__title">Предсказание для ${sign}</h3>
                <p class="sign__date">${data}</p>
            </div>
        </div>
    `
}

export default predictionWindow;