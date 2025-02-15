// import lunarInfo from "./lunarInfo.js";

// const prewiev = () => {

//     const prewievButton = document.querySelector(".cycle-block__preview");
//     const moonImage = document.querySelector(".moon");

//     prewievButton.addEventListener('click', () => {

//         const startDay = +(moonImage.src.slice(-6, -4));
//         let currentIndex = startDay;

//         const interval = setInterval(() => {
            
//             currentIndex = (currentIndex + 1) % lunarInfo.length;
//             const currentLunar = lunarInfo[currentIndex];
//             moonImage.src = `./assets/images/moon/${currentLunar.photo}`;
            

//             if (currentIndex === startDay) {
//                 clearInterval(interval);
//                 return;
//             }

//         }, 150);

//     });
// }

// export default prewiev;

import lunarInfo from "./lunarInfo.js";

let imagesPreloaded = false;
let intervalId = null;

const prewiev = () => {
  const prewievButton = document.querySelector(".cycle-block__preview");
  const moonImage = document.querySelector(".moon");

  const preloadImages = () => {
    return Promise.all(
      lunarInfo.map(info => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `./assets/images/moon/${info.photo}`;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  const handlePreviewClick = async () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    if (!imagesPreloaded) {
      try {
        prewievButton.disabled = true;
        prewievButton.textContent = "Loading...";
        await preloadImages();
        imagesPreloaded = true;
      } catch (error) {
        console.error('Failed to preload images:', error);
        return;
      } finally {
        prewievButton.disabled = false;
        prewievButton.textContent = "lunar cycle";
      }
    }

    const startDay = parseInt(moonImage.dataset.currentDay);
    let currentIndex = startDay;

    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % lunarInfo.length;
      const currentLunar = lunarInfo[currentIndex];
      moonImage.src = `./assets/images/moon/${currentLunar.photo}`;
      moonImage.dataset.currentDay = currentIndex;

      if (currentIndex === startDay) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }, 150);
  };

  prewievButton.addEventListener('click', handlePreviewClick);
};

export default prewiev;