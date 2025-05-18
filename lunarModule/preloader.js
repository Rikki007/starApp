const preloader = () => {
    const lunarInfoBlock = document.querySelector(".lunar-preloader");
    lunarInfoBlock.classList.toggle("preloader-hide")
    setTimeout(() => {
        lunarInfoBlock.classList.toggle("preloader-hide");
    }, 2500)
}

export default preloader;