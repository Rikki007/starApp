import weatherPreview from "./weatherPreview.js";

const weatherAction = () => {
    const weatherButton = document.querySelector(".weather-button");
    weatherButton.addEventListener('click', () => {
        const city = document.querySelector(".city__input").value;
        city === '' ? alert('Введите название города') : weatherPreview(city);
    });
}

export default weatherAction;