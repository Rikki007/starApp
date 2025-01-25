export const gemCreator = (val) => {
  return val.map((item) => {
    return `
      <img class="description-section-gems__image" src="${item.picture}" alt="picture"/>
      <div>
        <p class="description-section-gems__name">${item.name}</p>
        <p class="description-section-gems__positive">${item.positive}</p>
        <p class="description-section-gems__protection">${item.protection}</p>
      </div>
    `
  }).join('');
}