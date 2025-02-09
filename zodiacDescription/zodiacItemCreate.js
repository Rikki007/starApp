import { gemCreator } from "./gemCreate.js";
import { personCreator } from "./personcreator.js";
import { humanQualitiesCreator } from "./humanQualities.js";

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

        <div class="info-qualities">
          <div class="qualities-wrapper">
            <h2 class="qualities-title"> Negative qualities</h2>
            ${humanQualitiesCreator(signUnit.negativeTraits)}
          </div>
          <div class="qualities-wrapper">
            <h2 class="qualities-title"> Positive qualities</h2>
            ${humanQualitiesCreator(signUnit.positiveTraits)}
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

        <div class="section-relations">
          <div class="section-relations-item">
            <h3 class="description-section-relations__desc">Interactions.</h3>
            <div class="relations-item-discription">
              <p class="description-section-relations__desc">Friends: ${signUnit.compatibility.friendship.join(', ')}.</p>
              <p class="description-section-relations__desc">Enemies: ${signUnit.compatibility.enemies}.</p>
            </div>
          </div>
          
          <div class="section-relations-item">
            <h3 class="description-section-relations__desc">For him.</h3>
            <div class="relations-item-discription">
              <p class="description-section-relations__desc">best match: ${signUnit.compatibility.genderSpecific.male.bestMatch}.</p>
              <p class="description-section-relations__desc">complicated relationships: ${signUnit.compatibility.genderSpecific.male.challenges}.</p>
            </div>
          </div>

          <div class="section-relations-item">
            <h3 class="description-section-relations__desc">For her.</h3>
            <div class="relations-item-discription">
              <p class="description-section-relations__desc">best match: ${signUnit.compatibility.genderSpecific.female.bestMatch}.</p>
              <p class="description-section-relations__desc">complicated relationships: ${signUnit.compatibility.genderSpecific.female.challenges}.</p>
            </div>
          </div>
        </div>

        <div class="section-professions-selebrities">
          <div class="section-relations-item">
            <h3 class="subtitle">Suitable professions.</h3>
            <p class="description-section-relations__desc">${signUnit.professions}</p>
          </div>

          <div class="section-relations-item">
            <h3 class="subtitle">Famouf people.</h3>
            <div class="persons-list">${personCreator(signUnit.famousPeople)}</div>
          </div>
        </div>

      </div>
  `
}

export default zodiacItemCreate;