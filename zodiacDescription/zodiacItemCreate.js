import { gemCreator } from "./gemCreate.js";

const zodiacItemCreate = (signUnit) => {
    return `
      <div class="description-section-container">
        <div class="description-section-title">
          <img src="${signUnit.sign}" alt="picture" class="description-section-title__sign">
          <p class="description-section-title__name">${signUnit.name}</p>
          <p class="description-section-title__date">${signUnit.date}</p>
        </div>
        <div class="description-section-gems">${gemCreator(signUnit.gems)}</div>
        <div class="description-section-planets">
          <p class="description-section-planets__name">Planet: ${signUnit.planet}</p>
          <p class="description-section-planets__description">${signUnit.description}</p>
        </div>
      </div>
  `
}

export default zodiacItemCreate;