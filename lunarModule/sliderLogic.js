import updateLunarPhase from "./lunar.js";

updateLunarPhase();

export const rightBtn = document.querySelector('.button__right');
export const leftBtn = document.querySelector('.button__left');
export const slider = document.querySelector('.slider');
export let sliceIndex = 0;

export function updateSliderPosition() {
  slider.style.transform = `translateX(-${sliceIndex * 102.4}%)`;
}

export const sliceFunction = () => {
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




