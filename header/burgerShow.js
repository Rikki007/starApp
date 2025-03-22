const burgerShow = () => {
    const burgerButton = document.querySelector(".burger-button");
    const burgerMenu = document.querySelector(".navbar");
    const burgerMenuElements = document.querySelectorAll(".navbar__item");
    const languageButton = document.querySelector(".lang");

    burgerMenuElements.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.toggle("navbar-close"); 
        });
    })

    burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle("navbar-close");
    });

    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
            burgerMenu.classList.add("navbar-close");
        }
    });

    languageButton.addEventListener('click', () => {
        burgerMenu.classList.add("navbar-close");
    });

}

export default burgerShow;