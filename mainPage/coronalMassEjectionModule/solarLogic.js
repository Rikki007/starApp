const solarLogic = () => {
    const animationSun = document.querySelector(".solar-preview__animation");
    const pictureSun = document.querySelector(".solar-preview__pic");

    animationSun.addEventListener('load', () => {
        animationSun.classList.remove("solar-preview__animation_deactive");
        pictureSun.classList.add("solar-preview__pic_deactive");
    });
}

export default solarLogic;