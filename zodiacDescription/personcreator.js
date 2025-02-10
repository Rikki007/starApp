export const personCreator = (arr) => {
    return arr.map((item) => {
        return `
            <div class="persons-list-item">
                <h4 class="persons-list-item__subtitle">${item.name}</h4>
                <p class="persons-list-item__desc">Birth: ${item.birthDate}.</p>
                <p class="persons-list-item__desc">${item.description}</p>
            </div>
        `
    }).join('');
}