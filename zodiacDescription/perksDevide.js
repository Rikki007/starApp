const perksDevide = (data) => {
    return data.map(item => {
        const title = item[0] || "Oops, thomething goes wrong=)";
        const description = item[1] || "Oops, thomething goes wrong=)";
        return `
            <div class="common-description-wrapper">
                <h3 class="sign__title">${title}</h3>
                <p class="sign__date">${description}</p>
            </div>
        `;
    }).join('');
}

export default perksDevide;