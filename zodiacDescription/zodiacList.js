import main from "../main/main.js";

export const zodiacListCreate = () => {
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
                    <p class="sign-elements__item">Aries</p>
                    <p class="sign-elements__item">Leo</p>
                    <p class="sign-elements__item">Sagittarius</p>
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
                    <p class="sign-elements__item">Cancer</p>
                    <p class="sign-elements__item">Scorpio</p>
                    <p class="sign-elements__item">Pisces</p>
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
                    <p class="sign-elements__item">Taurus</p>
                    <p class="sign-elements__item">Virgo</p>
                    <p class="sign-elements__item">Capricorn</p>
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
                    <p class="sign-elements__item">Gemini</p>
                    <p class="sign-elements__item">Libra</p>
                    <p class="sign-elements__item">Aquarius</p>
                </div>
            </div>
        </div>
        <div class="sign-description"></div>
    `
}