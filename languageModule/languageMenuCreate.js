import languageChange from "./languageChange.js";

const languageMenuCreate = () => {
        const languageButton = document.querySelector('.lang');
        const slideMenu = document.querySelector('.slide-menu');
      
        const toggleMenu = () => {
          slideMenu.classList.toggle('slide-menu_deactive');
        };
      
        languageButton.addEventListener('click', (event) => {
          event.stopPropagation();
          toggleMenu();
        });
      
        document.addEventListener('click', (event) => {
          if (!slideMenu.contains(event.target) && !languageButton.contains(event.target)) {
            slideMenu.classList.add('slide-menu_deactive');
          }
        });

        languageChange();
};

export default languageMenuCreate;