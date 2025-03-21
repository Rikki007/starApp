const windowCloser = (section) => {
    const closeButton = document.querySelector(".predWin");
    const back = document.querySelector(".back");
    closeButton.addEventListener("click", () => {
        section.innerHTML = '';
    });
    back.addEventListener("click", () => {
        section.innerHTML = '';
    });
}

export default windowCloser;