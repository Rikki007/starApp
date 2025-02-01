export const personCreator = (arr) => {
    return arr.map((item) => {
        return `
            <div class="persons-list-item">
                <h3 class="subtitle">${item.name}</h3>
                <p class="description-section-relations__desc">Birth: ${item.birthDate}.</p>
                <p class="description-section-relations__desc">${item.description}</p>
            </div>
        `
    }).join('');
}