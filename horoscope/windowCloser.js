const windowCloser = (section) => {
    const closeButton = document.querySelector(".predWin");
    const back = document.querySelector(".back");
    closeButton.addEventListener("click", () => {
        section.innerHTML = '';
        document.body.classList.remove("scroll_lock");
    });
    back.addEventListener("click", () => {
        section.innerHTML = '';
        document.body.classList.remove("scroll_lock"); 
    });
}

export default windowCloser;