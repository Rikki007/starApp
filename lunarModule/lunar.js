import lunarInfo from "./lunarInfo.js";
import calculateLunarDay from "./lunarDay.js";
import lunarZodiac from "./lunarZodiac.js";
import lunarZodiacCreate from "./lunarZodiacCreator.js";


function updateLunarPhase() {
  const date = new Date();
  const lunarDay = calculateLunarDay(date);
  const main = document.querySelector('.main');

  main.innerHTML = `
    <section class="lunar-section">
      <h2 class="lunar-section__title">Lunar phases</h2>
      <div class="phase-block">
        <div class="phase-block__image">
          <img src="./assets/images/moon/${lunarInfo[lunarDay].photo}" alt="picture of moon" class="moon">
        </div>
        <p class="phase-block__status">${lunarInfo[lunarDay].phase}</p>
        <p class="phase-block__description">${lunarInfo[lunarDay].description}</p>
      </div>
      <div class="zodiac-block">
        <div class="slider">${lunarZodiacCreate()}</div>
      </div>
      <div class="slider-buttons">
        <div class="slider-buttons__item button__left">
          <img src="./assets/animation/arrow.png" alt="arrow" class="arrow arrow__left">
        </div>
        <div class="slider-buttons__item button__right">
          <img src="./assets/animation/arrow.png" alt="arrow" class="arrow arrow__right">
        </div>
      </div>
    </section>
  `
}

export default updateLunarPhase;