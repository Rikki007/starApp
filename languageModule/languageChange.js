import languageLogo from "./languageLogo.js";

const languageChange = () => {
    const languageItemButton = document.querySelectorAll(".container-list-item");
    const settingsContainer = document.querySelector(".settings-container");

    languageItemButton.forEach(item => {

        item.addEventListener("click", () => {

            if (item.classList.contains("en")) {
                localStorage.setItem('language', 'en');
            }
            if (item.classList.contains("ru")) {
                localStorage.setItem('language', 'ru');
            }
            if (item.classList.contains("cz")) {
                localStorage.setItem('language', 'cz'); 
            }

            settingsContainer.innerHTML = languageLogo();
            location.reload();

        });
        
    });
}

export default languageChange;