const openPage = (callBack) => {
    const spinner = document.querySelector('.loader-container');
    callBack();
    spinner.classList.toggle('loader-container_disable');
    setTimeout(() => {
        spinner.classList.toggle('loader-container_disable');
    }, 3000);
}

export default openPage;