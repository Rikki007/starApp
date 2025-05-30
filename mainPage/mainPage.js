const mainPage = () => {
    const main = document.querySelector(".main");

    main.innerHTML = `
        <section class="main-wrapper">
        
            <div class="back-image"></div>

            <div class="back-image-bottom"></div>

            <div class="banner-wrapper">
                <div class="banner">
                    <p class="banner__desc first-quote">Luory — ваш персональный астролог.</p>
                    <p class="banner__desc">Мы приглашаем вас раскрыть тайны космоса.</p>
                    <p class="banner__desc">Познайте себя через взаимодействие небесных тел.</p>
                </div>
                <p class="banner__desc last-quote">Сделайте шаг к звездам вместе с Luory!</p>
            </div>

            <section class="section-item">
                <h2 class="item__title banner__desc">Танец звезд и луны: что ждет впереди?</h2>
                <p class="item__description">
                    Космос движется в вечном ритме. Вселенная рождается, расширяется, угасает и возрождается вновь. Всё уже было, всё исчезнет и вернётся снова в бесконечном цикле.
                </p>
                <div class="section-item-wrapper">

                    <div class="section-item-wrapper-discription">

                        <div class="simple-wrapper">
                            <p class="item__description">Откройте тайны грядущего — исследуйте положение Луны и ее значение.</p>
                            <button class="navbar__item simple-wrapper__button">Положение луны</button>
                        </div>
                        
                        <div class="simple-wrapper">
                            <p class="item__description">Грядущие события оказывают на нас влияние. Узнайте о том, что скоро случится.</p>
                            <button class="navbar__item simple-wrapper__button">События</button>
                        </div>

                    </div>

                    <img src="./assets/images/mainPage/galaxy.png" class="section-item-wrapper__image" alt="galaxy"

                </div>
            </section>

            <section class="section-item signs-and-interaction">
                <h2 class="item__title banner__desc">Созвездия судьбы: магия знаков и их взаимодействие.</h2>
                <p class="item__description">
                    Откройте завесу тайны влияния созвездий! Узнайте, как знаки зодиака формируют вашу судьбу и какие астрологические взаимодействия определяют гармонию и баланс. Выберите путь понимания — загляните в описание знаков или исследуйте их взаимосвязь. Звезды говорят — осталось лишь услышать их. Исследуйте влияние знаков и их магию!
                </p>
                <div class="section-item-wrapper">

                    <div class="section-item-wrapper-discription">

                        <div class="simple-wrapper">
                            <p class="item__description">Откройте для себя тайны знаков зодиака.</p>
                            <button class="navbar__item simple-wrapper__button">Исследовать знаки</button>
                        </div>
                        
                        <div class="simple-wrapper">
                            <p class="item__description">Узнайте, как взаимодействуют знаки между собой.</p>
                            <button class="navbar__item simple-wrapper__button">Открыть взаимосвязи</button>
                        </div>

                        <div class="simple-wrapper">
                            <p class="item__description">
                                Звёзды указали направление, выбор, как пройти этот путь, за тобой.
                            </p>
                            <button class="navbar__item simple-wrapper__button">Гороскоп</button>
                        </div>
                    
                    </div>

                    <div class="picture-container">

                        <img src="./assets/images/mainPage/stars4.png" class="picture-container__image sky-img" alt="stars"/>

                        <img src="./assets/images/mainPage/moon1.png" class="picture-container__image moon-img" alt="moon"/>

                        <img src="./assets/images/mainPage/cloud2.png" class="picture-container__image cloud-img" alt="cloud"/>

                        <img src="./assets/images/mainPage/girlOnField.png" class="picture-container__image observer-img" alt="observer"/>

                    </div>

                    

                </div>
            </section>

            <section class="section-item">
                <h2 class="item__title banner__desc">Наши контакты.</h2>
                <div class="contact main-page-contact">
                        <p class="network-link">
                            Электронная почта: 
                            <a href="mailto:oreshaodnoglazy@gmail.com">
                                <img src="./assets/icons/contacts/mail.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            Следите за нами: 
                            <a href="https://www.instagram.com/_Luory/" target="_blank">
                                <img src="./assets/icons/contacts/instagram.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            Читайте нас: 
                            <a href="https://www.threads.net/@_luory/" target="_blank">
                                <img src="./assets/icons/contacts/threads.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            Подписывайтесь на нас: 
                            <a href="https://t.me/luoryChanel" target="_blank">
                                <img src="./assets/icons/contacts/telegram-svgrepo-com.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                    </div>
            </section>

        </section>
    `;

    // coronalMassFormingData();
    // geomagneticActivity();
    // geomagneticAnalysisPreview();
    // kpIndexNowPreview();
    // dataCMEOutput();
    // weatherAction();
    // weatherLastResp();
    
};

export default mainPage;