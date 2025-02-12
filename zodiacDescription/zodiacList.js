const zodiacListCreate = () => {
    const main = document.querySelector('.main')
    main.innerHTML = `
        <div class="elements-container">
            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/fire.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">Fire</h3>
                    <p class="container-item__description">
                    Fire signs are known for their energy, passion, and enthusiasm. They love to act quickly and decisively, seeking new adventures and challenges. These signs are full of life, charismatic, and can inspire those around them. They possess strong willpower and a desire for leadership.
                    </p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" name="aries">Aries</button>
                    <button class="sign-elements__item" name="leo">Leo</button>
                    <button class="sign-elements__item" name="sagittarius">Sagittarius</button>
                </div>
            </div>

            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/water.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">Water</h3>
                    <p class="container-item__description">
                    Water signs are characterized by deep emotions, intuition, and sensitivity. They are often very empathetic and capable of understanding the feelings of others. These signs tend to be introspective and can be very creative. Their emotions flow like water, and they often seek depth and meaning in life.
                    </p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" name="cancer">Cancer</button>
                    <button class="sign-elements__item" name="scorpio">Scorpio</button>
                    <button class="sign-elements__item" name="pisces">Pisces</button>
                </div>
            </div>
        
            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/earth.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">Earth</h3>
                    <p class="container-item__description">
                    Earth signs are known for their practicality, reliability, and stability. They are focused on the material and physical aspects of life, seeking security and stability. These signs are hardworking, patient, and have a strong sense of responsibility. They prefer to act methodically and achieve their goals step by step.
                    </p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" name="taurus">Taurus</button>
                    <button class="sign-elements__item" name="virgo">Virgo</button>
                    <button class="sign-elements__item" name="capricorn">Capricorn</button>
                </div>
            </div>

            <div class="container-item">
                <div class="common-container">
                    <img src="./assets/images/elements/air.png" alt="pic" class="container-item____picture">
                    <h3 class="container-item__title">Air</h3>
                    <p class="container-item__description">
                        Air signs are characterized by their intellectuality, communicativeness, and curiosity. They love to exchange ideas, discuss, and analyze various aspects of life. These signs strive for harmony and balance, often showing flexibility and adaptability. They value freedom and independence.
                    </p>
                </div>
                
                <div class="sign-elements-list">
                    <button class="sign-elements__item" name="gemini">Gemini</button>
                    <button class="sign-elements__item" name="libra">Libra</button>
                    <button class="sign-elements__item" name="aquarius">Aquarius</button>
                </div>
            </div>
        </div>
        <div class="sign-description"></div>
    `
}

export default zodiacListCreate;