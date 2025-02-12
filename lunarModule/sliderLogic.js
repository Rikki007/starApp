export let sliceIndex = 0;

export const updateSliderPosition = () => {
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.style.transform = `translateX(-${sliceIndex * 102.4}%)`;
  }
};


document.addEventListener('click', (event) => {
  const leftBtn = event.target.closest('.button__left');
  const rightBtn = event.target.closest('.button__right');
  
  if (leftBtn) {
    event.preventDefault();
    sliceIndex = sliceIndex > 0 ? sliceIndex - 1 : 5;
    updateSliderPosition();
  } else if (rightBtn) {
    event.preventDefault();
    sliceIndex = sliceIndex < 5 ? sliceIndex + 1 : 0;
    updateSliderPosition();
  }
});




