import lunarInfo from "./lunarInfo.js";

const prewiev = () => {

    const prewievButton = document.querySelector(".cycle-block__preview");
    const moonImage = document.querySelector(".moon");

    prewievButton.addEventListener('click', () => {

        const startDay = +(moonImage.src.slice(-6, -4));
        let currentIndex = startDay;

        const interval = setInterval(() => {
            
            currentIndex = (currentIndex + 1) % lunarInfo.length;
            const currentLunar = lunarInfo[currentIndex];
            moonImage.src = `./assets/images/moon/${currentLunar.photo}`;
            

            if (currentIndex === startDay) {
                clearInterval(interval);
                return;
            }

        }, 150);

    });
}

export default prewiev;