import descriptionContent from "./descriptionContent.js";

const chooseSign = () => {
    
    const signs = document.querySelectorAll(".rose-sign");
    const firstSignField = document.querySelector(".sign-field__first");
    const secondSignField = document.querySelector(".sign-field__second");
    const interactionButton = document.querySelector(".interaction-button");

    firstSignField.addEventListener('change', () => {
        signs.forEach(item => {
            item.classList.remove("rose-sign__able");
        })
        const sign = document.querySelector(`.${firstSignField.value}-sign`);
        sign.classList.add("rose-sign__able");
    });
    secondSignField.addEventListener('change', () => {
        signs.forEach(item => {
            item.classList.remove("rose-sign__able");
        })
        const sign = document.querySelector(`.${secondSignField.value}-sign`);
        sign.classList.add("rose-sign__able");
    });

    interactionButton.addEventListener('click', () => {
        if (firstSignField.value === 'default') {
            alert('Выберете знак в первом поле ввода');
        }
        if (secondSignField.value === 'default') {
            alert('Выберете знак во втором поле ввода');
        }
        if (firstSignField.value !== 'default' && secondSignField.value !== 'default') {
            descriptionContent(firstSignField.value, secondSignField.value)
        }
    });

}

export default chooseSign;