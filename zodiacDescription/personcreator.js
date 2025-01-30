export const personCreator = (arr) => {
    return arr.map((item) => {
        return `
            <p class="subtitle">${item.name}</p>
            <p class="description-section-relations__desc">${item.birthDate}</p>
            <p class="description-section-relations__desc">${item.description}</p>
        `
    }).join('');
}