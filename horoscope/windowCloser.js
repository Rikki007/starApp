const windowCloser = (section) => {
    const closeButton = document.querySelector(".back-button");
    const back = document.querySelector(".back");
    closeButton.addEventListener("click", () => {
        section.innerHTML = '';
    });
    back.addEventListener("click", () => {
        section.innerHTML = '';
    });
}

export default windowCloser;