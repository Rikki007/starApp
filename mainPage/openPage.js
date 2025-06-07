import selectQuote from "../preloader/selectQuote.js";

const openPage = (callBack) => {
    const spinner = document.querySelector('.loader-container');
    callBack();
    selectQuote();
    spinner.classList.toggle('loader-container_disable');
    setTimeout(() => {
        spinner.classList.toggle('loader-container_disable');
    }, 3000);
}

export default openPage;