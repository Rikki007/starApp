import zodiacDescription from "../zodiacDescription/zodiacDescription.js";
import predictionRequest from "./predictionRequest.js";

const horoscope = () => {
    const main = document.querySelector(".main");
    main.innerHTML = `
        <section class="deprication-section"></section>
        <section class="horoscope-section">
            ${
                zodiacDescription.map((item) => {
                    return `
            
                        <div class="sign-block">
                            <h2 class="sign-block__title">${item.name}</h2>
                            <img src="${item.sign}" class="sign-block__image"/>
                            <button class="sign-block__button navbar__item" data-sign="${item.className}" type="button">request horoscope</button>
                        </div>
                    `
                }).join('')
            }   
        </section>
    ` 
    predictionRequest();
}

export default horoscope;