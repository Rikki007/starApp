import interactionDescription from "./interactionDescription.js";

const descriptionContent = (mainSign, secondarySign) => {
    const descriptionSection = document.querySelector(".description-section");
    const data = interactionDescription[mainSign][secondarySign];
    console.log(data)

    descriptionSection.innerHTML = `
        <div class="common-wrapper">
            <h3 class="common-wrapper__title">Взаимодействие стихий:</h3>
            <p class="common-wrapper__description">${data.Elements}.</p>
            <h3 class="common-wrapper__title">Кресты качества:</h3>
            <p class="common-wrapper__description">${data.Modes}.</p>
            <h3 class="common-wrapper__title">Полярности:</h3>
            <p class="common-wrapper__description">${data.Polarities}.</p>
        </div>
        <div class="common-wrapper">
            <h3 class="common-wrapper__title">Отношения:</h3>
            <p class="common-wrapper__description">${data.Romance}</p>
            <h3 class="common-wrapper__title">Дружба:</h3>
            <p class="common-wrapper__description">${data.Friendship}</p>
            <h3 class="common-wrapper__title">Взаимодействие на работе:</h3>
            <p class="common-wrapper__description">${data.Work}</p>
        </div>
        <div class="common-wrapper">
            <h3 class="common-wrapper__title">Совет:</h3>
            <p class="common-wrapper__description">${data.Advice}.</p>
        </div>
    `
}

export default descriptionContent;