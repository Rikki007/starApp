import { zodiacDescription } from "../zodiacDescription/zodiacDescription.js";

const horoscope = () => {
    const main = document.querySelector(".main");
    main.innerHTML = `
        <section class="horoscope-section">
            ${
                zodiacDescription.map((item) => {
                    return `
            
                        <div class="sign-block">
                            <h2 class="sign-block__title">${item.name}</h2>
                            <img src="${item.sign}" class="sign-block__image"/>
                            <button class="sign-block__button navbar__item" name="${item.name}">request horoscope</button>
                        </div>
                    `
                }).join('')
            }   
        </section>
    ` 
}

export default horoscope;

'sk-414b2dc1db0842ab801e96c86a519242'