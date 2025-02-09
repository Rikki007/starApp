export const humanQualitiesCreator = (val) => {
    return val.map((item) => {
      return `
        <div class="info-qualities">
          <div class="info-qualities-container">
            <h3 class="info-qualities__title">${item.trait}</h3>
            <p class="info-qualities__description">${item.description}</p>
          </div>
        </div>
      `
    }).join('');
  }