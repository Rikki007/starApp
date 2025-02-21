import languageButtonChange from "./languageButtonChange.js";

const languageChange = () => {
    const languageItemButton = document.querySelectorAll(".container-list-item");
    languageItemButton.forEach(item => {

        item.addEventListener("click", () => {

            if (item.classList.contains("en")) {
                localStorage.setItem('language', 'en');
                languageButtonChange();
            }
            if (item.classList.contains("ru")) {
                localStorage.setItem('language', 'ru');
                languageButtonChange();
            }
            if (item.classList.contains("cz")) {
                localStorage.setItem('language', 'cz');
                languageButtonChange();
            }

        });
        
    });
}

export default languageChange;