const about = () => {
    const main = document.querySelector(".main");
    main.innerHTML = `
        <section class="about">
            <div class="about-container">
                <h2>О нас</h2>
                <p>
                    Добро пожаловать в наше приложение! Здесь космические явления и астрология оживают, превращаясь в увлекательный и познавательный опыт. Мы создаем пространство, где каждый может насладиться магией Вселенной, узнать что-то новое и просто получить удовольствие от взаимодействия с уникальным контентом. Наше приложение создано для развлечения и не стремится задеть или оскорбить чувства людей, независимо от их национальности, вероисповедания или взглядов. Мы также не поощряем никаких противоправных или неэтичных действий. Все данные, предоставляемые приложением, носят ознакомительный характер, чтобы помочь вам насладиться астрологией и космическими явлениями в комфортном и безопасном формате.
                </p>
                <div class="about-details about-container">
                    <h3>Наша миссия</h3>
                    <p>
                        Мы стремимся помочь вам найти гармонию между внутренним миром и ритмами Вселенной. Мы верим, что понимание астрологии и космических событий может дать ясность в размышлениях, уверенность в принятии решений и гармонию в личной жизни.
                        Наш проект отличается индивидуальным подходом, высокими стандартами качества и любовью к деталям.
                        Мы верим, что каждая мелочь имеет значение.
                    </p>
                </div>
                <div class="team-section about-container">
                    <h3>Наша команда</h3>
                    <p>
                        Этот проект родился из увлечения астрологией, космосом, мифологией и стремления поделиться этими знаниями с миром. Основная часть работы выполнена разработчиком, чья энергия и творчество подпитывались вдохновением, полученным от супруги и товарищей, разделяющих его идеи. Вместе они создали пространство, где каждая деталь отражает страсть и преданность своему делу. Наша команда состоит из вдохновленного разработчика, его супруги, сыгравшей ключевую роль в поддержке и креативных импульсах, и товарищей, которые внесли свой идейный вклад. Вместе мы объединили усилия, чтобы создать проект, который дарит удовольствие и знания пользователям.
                    </p>
                </div>
                <div class="about-container">
                    <h3>Свяжитесь с нами</h3>
                    <div class="contact">
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
                                <img src="../assets/icons/contacts/threads.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                        <p class="network-link">
                            Подписывайтесь на нас: 
                            <a href="https://t.me/luoryChanel" target="_blank">
                                <img src="./assets/icons/contacts/telegram-svgrepo-com.svg" alt="picture" class="footer-logo">
                            </a>
                        </p>
                    </div>
                </div>
                <div class="thanks-section about-container">
                    <h3>Благодарности:</h3>
                    <div class="contact">
                        <p class="thank-list">
                            Oreshkevich Y.
                        </p>
                        <p class="thank-list">
                            Juravlev I.
                        </p>
                        <p class="thank-list">
                            Medvedev A.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    ` 
}

export default about;