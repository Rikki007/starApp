import { gemCreator } from "./gemCreate.js";

const zodiacItemCreate = (signUnit) => {
    return `
      <div class="description-section-container">
        <div class="description-section-title">
          <img src="${signUnit.sign}" alt="picture" class="description-section-title__sign">
          <h3 class="description-section-title__name">${signUnit.name}</h3>
          <p class="description-section-title__date">${signUnit.date}</p>
        </div>
        <div class="description-section-gems-description">${signUnit.gemsDescription}</div>
        <div class="description-section-gems">${gemCreator(signUnit.gems)}</div>
        <div class="description-section-planets">
          <img src="${signUnit.planetLocation}" class="description-section-planets__picture" alt="picture"/>
          <p class="description-section-planets__name">Planet: ${signUnit.planet}</p>
          <p class="description-section-planets__description">${signUnit.description}</p>
        </div>
      </div>
  `
}

export default zodiacItemCreate;