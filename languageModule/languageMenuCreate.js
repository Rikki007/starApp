const languageMenuCreate = () => {
    // const userLang = navigator.language || 'en';
    // console.log(userLang);
    const languageMenu = document.querySelector(".slide-menu");

    languageMenu.classList.toggle("slide-menu_deactive");


}

export default languageMenuCreate;