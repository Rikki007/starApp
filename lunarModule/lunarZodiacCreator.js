import localization from "../localization/localizationData.js";
import getLanguage from "../localization/localizationUtils.js";

const lunarZodiacCreate = () => {
  const lang = getLanguage();
  const lunarZodiac = localization[lang].lunarZodiac;
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