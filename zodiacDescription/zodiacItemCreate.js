import { zodiacDescription } from "./zodiacDescription.js";
import { gemCreator } from "./gemCreate.js";

export const zodiacItemCreate = () => {

  return zodiacDescription.map((item) => {
    return `
      <div class="description-section-container">
        <div class="description-section-title">
          <img src="${item.sign}" alt="picture" class="description-section-title__sign">
          <p class="description-section-title__name">${item.name}</p>
          <p class="description-section-title__date">${item.date}</p>
        </div>
        <div class="description-section-gems">${gemCreator(item.gems)}</div>
        <div class="description-section-planets">
          <p class="description-section-planets__name">Planet: ${item.planet}</p>
          <p class="description-section-planets__description">${item.description}</p>
        </div>
      </div>
  `
  }).join('');
  
}