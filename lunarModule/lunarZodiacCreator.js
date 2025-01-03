import lunarZodiac from "./lunarZodiac.js";

const lunarZodiacCreate = () => {
  return lunarZodiac.map(item => {
    return `
      <div class="zodiac-block__wrapper">
        <div class="zodiac-block__logo">
          <h3 class="zodiac-block__title">${item.name}</h3>
          <img src="${item.sighn}" alt="zodiac picture" class="zodiac-block__picture">
        </div>
        <p class="zodiac-block__description">${item.description}</p>
      </div>
    `
  }).join('');
}

export default lunarZodiacCreate;