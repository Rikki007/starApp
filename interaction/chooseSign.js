import descriptionContent from "./descriptionContent.js";

const chooseSign = () => {
    
    const signs = document.querySelectorAll(".rose-sign");
    let signFirst, signSecond;
    const firstSignField = document.querySelector(".sign-field__first");
    const secondSignField = document.querySelector(".sign-field__second");
    const arrow = document.querySelector(".cycle-arrow");
    const interactionButton = document.querySelector(".interaction-button");
    const preloader = document.querySelector('.loader-container');

    firstSignField.addEventListener('change', () => {
        if (!arrow.classList.contains('rotate')) {
            arrow.classList.add('rotate');
        }
        arrow.classList.add('rotate');
        signs.forEach(item => {
            item.classList.remove("rose-sign__able");
        })
        signFirst = document.querySelector(`.${firstSignField.value}-sign`);
        signFirst.classList.add("rose-sign__able");
        signSecond.classList.add("rose-sign__able");
    });
    secondSignField.addEventListener('change', () => {
        if (!arrow.classList.contains('rotate')) {
            arrow.classList.add('rotate');
        }
        arrow.classList.add('rotate');
        signs.forEach(item => {
            item.classList.remove("rose-sign__able");
        })
        signSecond = document.querySelector(`.${secondSignField.value}-sign`);
        signFirst.classList.add("rose-sign__able");
        signSecond.classList.add("rose-sign__able");
    });

    interactionButton.addEventListener('click', () => {
        if (firstSignField.value === 'default') {
            alert('Выберете знак в первом поле ввода');
        }
        if (secondSignField.value === 'default') {
            alert('Выберете знак во втором поле ввода');
        }
        if (firstSignField.value !== 'default' && secondSignField.value !== 'default') {
            preloader.classList.toggle('loader-container_disable');
            setTimeout(() => {
                preloader.classList.toggle('loader-container_disable');
            }, 1000);
            if (arrow.classList.contains('rotate')) {
                arrow.classList.remove('rotate');
            }
            descriptionContent(firstSignField.value, secondSignField.value)
        }
    });

}

export default chooseSign;