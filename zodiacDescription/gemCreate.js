export const gemCreator = (val) => {
  return val.map((item) => {
    return `
      <p class="description-section-gems__name">${item.name}</p>
      <p class="description-section-gems__positive">${item.positive}</p>
      <p class="description-section-gems__protection">${item.protection}</p>
    `
  }).join('');
}