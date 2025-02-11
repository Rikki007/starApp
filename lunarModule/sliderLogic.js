import updateLunarPhase from "./lunar.js";

export let sliceIndex = 0;

export const  updateSliderPosition = () => {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${sliceIndex * 102.4}%)`;
}

export const sliceFunction = () => {
  const rightBtn = document.querySelector('.button__right');
  const leftBtn = document.querySelector('.button__left');
  if(leftBtn || rightBtn) {
    leftBtn.addEventListener('click', () => {
      if (sliceIndex > 0) {
        sliceIndex -= 1;
        updateSliderPosition();
      } else {
        sliceIndex = 5;
        updateSliderPosition();
      }
    });

    rightBtn.addEventListener('click', () => {
      if (sliceIndex < 5) {
        sliceIndex += 1;
        updateSliderPosition();
      } else {
        sliceIndex = 0;
        updateSliderPosition();
      }
    });
  }
    

    
}




