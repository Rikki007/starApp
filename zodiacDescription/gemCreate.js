export const gemCreator = (val) => {
  return val.map((item) => {
    return `
      <h3 class="description-section-gems__name">${item.name}</h3>
      <img class="description-section-gems__image" src="${item.picture}" alt="picture"/>
    `
  }).join('');
}