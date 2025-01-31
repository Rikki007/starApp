import { gemCreator } from "./gemCreate.js";
import { personCreator } from "./personcreator.js";

const zodiacItemCreate = (signUnit) => {
    return `
      <div class="description-container">

        <div class="section-title">
          <h3 class="section-title__name">${signUnit.name}</h3>
          <p class="section-title__date">${signUnit.date}</p>
        </div>

        <div class="section-main">
          <img src="${signUnit.sign}" alt="picture" class="section-main__pic">
          <div class="section-main-info">
            <div class="info-description">${signUnit.gemsDescription}</div>
            <div class="info-gems">${gemCreator(signUnit.gems)}</div>
          </div>
        </div>

        <div class="section-planets-relationships">
          <div class="planets-info">
            <div class="planets-info-unit">
              <h3 class="planets-info__name">Planet: ${signUnit.planet}.</h3>
              <p class="planets-info__description">${signUnit.description}</p>
            </div>
            <div class="planets-info-unit">
              <h3 class="subtitle">Relationships</h3>
              <p class="description-section-relations__desc">${signUnit.compatibility.description}</p>
            </div>
          </div>
          <img src="${signUnit.planetLocation}" class="section-planets__image" alt="picture"/>
        </div>

        <div class="description-section-relations">
          <img src="${signUnit.compatibility.icon}" class="description-section-relations" alt="picture">
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