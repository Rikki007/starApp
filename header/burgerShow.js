const burgerShow = () => {
    const burgerButton = document.querySelector(".burger-button");
    const burgerMenu = document.querySelector(".navbar");
    const burgerClose = document.querySelector(".navbtn");
    burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle("navbar-close");
    });
    burgerClose.addEventListener('click', () => {
        burgerMenu.classList.toggle("navbar-close");
    });
}

export default burgerShow;