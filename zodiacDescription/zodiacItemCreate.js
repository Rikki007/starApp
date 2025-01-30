import { gemCreator } from "./gemCreate.js";
import { personCreator } from "./personcreator.js";

const zodiacItemCreate = (signUnit) => {
    return `
      <div class="description-section-container">
        <div class="description-section-title">
          <img src="${signUnit.sign}" alt="picture" class="description-section-title__sign">
          <h3 class="description-section-title__name">${signUnit.name}</h3>
          <p class="description-section-title__date">${signUnit.date}</p>
        </div>
        <div class="description-section-gems-section">
          <div class="description-section-gems-description">${signUnit.gemsDescription}</div>
          <div class="description-section-gems">${gemCreator(signUnit.gems)}</div>
        </div>
        <div class="description-section-planets">
          <img src="${signUnit.planetLocation}" class="description-section-planets__picture" alt="picture"/>
          <p class="description-section-planets__name">Planet: ${signUnit.planet}</p>
          <p class="description-section-planets__description">${signUnit.description}</p>
        </div>
        <div class="description-section-relations">
          <h3 class="subtitle">Relationships</h3>
          <p class="description-section-relations__desc">${signUnit.compatibility.description}</p>
          <p class="description-section-relations__desc">Friends: ${signUnit.compatibility.friendship.join(', ')}.</p>
          <P class="description-section-relations__desc">Enemies: ${signUnit.compatibility.enemies}.</P>
          <h3 class="subtitle">Relationships with the opposite sex</h3>
          <p class="description-section-relations__desc">For him.</p>
          <p class="description-section-relations__desc">best match: ${signUnit.compatibility.genderSpecific.male.bestMatch}.</p>
          <p class="description-section-relations__desc">complicated relationships: ${signUnit.compatibility.genderSpecific.male.challenges}.</p>
          <p class="description-section-relations__desc">For her.</p>
          <p class="description-section-relations__desc">best match: ${signUnit.compatibility.genderSpecific.female.bestMatch}.</p>
          <p class="description-section-relations__desc">complicated relationships: ${signUnit.compatibility.genderSpecific.female.challenges}.</p>
        </div>
        <div class="description-section-professions-selebrities">
          <h3 class="subtitle">Suitable professions.</h3>
          <p class="description-section-relations__desc">${signUnit.professions}</p>
          <h3 class="subtitle">Famouf people.</h3>
          <div>${personCreator(signUnit.famousPeople)}</div>
        </div>
      </div>
  `
}

export default zodiacItemCreate;