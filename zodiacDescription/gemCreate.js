export const gemCreator = (val) => {
  return val.map((item) => {
    return `
      <div class="info-gem">
        <img class="info-gem__image" src="${item.picture}" alt="picture"/>
        <h3 class="info-gem__name">${item.name}</h3>
      </div>
    `
  }).join('');
}