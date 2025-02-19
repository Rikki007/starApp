const headerCreate = () => {
    return `
        <header class="header">

            <div class="header__item lang">
                <img src="./assets/icons/gear.png" class="settings" alt="gear picture"/>
                <div class="slide-menu slide-menu_deactive">
                    <nav class="slide-menu-container">
                        <ul class="container-list">
                            <li class="container-list-item">
                                <img src="./assets/images/localization/eng.png" class="item__pic" alt="eng"/>
                                <p class="item__language">english</p>
                            </li>
                            <li class="container-list-item">
                                <img src="./assets/images/localization/ru.png" class="item__pic" alt="ru"/>
                                <p class="item__language">русский</p>
                            </li>
                            <li class="container-list-item">
                                <img src="./assets/images/localization/cz.png" class="item__pic" alt="cz"/>
                                <p class="item__language">čeština</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <div class="header__item content">
                <div class="logo-container">

                    <img src="./assets/images/lunarOracleLoge.png" alt="logo picture" class="logo-container__image">
                    <h1 class="logo-container__title">Luora</h1>

                </div>

                <nav class="navbar">

                    <ul class="navbar__list">

                        <li class="navbar__item moon-position">Moon Position</li>
                        <li class="navbar__item future-events">Future Events</li>
                        <li class="navbar__item zodiac-description">Zodiac Description</li>
                        <li class="navbar__item horoscope">Horoscope</li>
                        
                    </ul>

                </nav>
            </div>
            

        </header>
    `
}

export default headerCreate;