import languageChange from "./languageChange.js";

const languageMenuCreate = () => {
        const languageButton = document.querySelector('.lang');
        const slideMenu = document.querySelector('.slide-menu');
      
        languageButton.addEventListener('click', (event) => {
          event.stopPropagation();
          slideMenu.classList.toggle('slide-menu_deactive');
        });
      
        document.addEventListener('click', (event) => {
          if (!slideMenu.contains(event.target) && !languageButton.contains(event.target)) {
            slideMenu.classList.add('slide-menu_deactive');
          }
        });

        languageChange();
};

export default languageMenuCreate;