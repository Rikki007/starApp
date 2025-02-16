import lunarInfo from "./lunarInfo.js";

const prewiev = () => {

  const prewievButton = document.querySelector(".cycle-block__preview");
  const moonImage = document.querySelector(".moon");
  const preloader = document.querySelector(".loader-container");

  prewievButton.addEventListener('click', () => {

    preloader.classList.toggle("loader-container_disable");

    const startDay = +(moonImage.src.slice(-6, -4));
    let currentIndex = startDay;

    const arr = [];
    for (let i = 0; i < lunarInfo.length; i += 1 ) {
      const img = new Image;
      img.src = `./assets/images/moon/lunarCycle${i}.png`;
      arr.push(img);
    }

    preloader.classList.toggle("loader-container_disable");
    prewievButton.disabled = true;
    prewievButton.classList.toggle("cycle-block__preview_disable");

    const interval = setInterval(() => {
        
        currentIndex = (currentIndex + 1) % lunarInfo.length;
        const currentLunar = lunarInfo[currentIndex];
        moonImage.src = `./assets/images/moon/${currentLunar.photo}`;
        

        if (currentIndex === startDay) {
          prewievButton.disabled = false;
          prewievButton.classList.toggle("cycle-block__preview_disable");
          clearInterval(interval);
          return;
        }

    }, 60);

  });
}

export default prewiev;