const headerCreate = () => {
    return `
        <header class="header">

            <div class="logo-container">

            <img src="./assets/images/lunarOracleLoge.png" alt="logo picture" class="logo-container__image">
            <h1 class="logo-container__title">Lunar Oracle</h1>

            </div>

            <nav class="navbar">

            <ul class="navbar__list">

                <li class="navbar__item current-events">Current Events</li>
                <li class="navbar__item future-events">Future Events</li>
                <li class="navbar__item zodiac-description">Zodiac Description</li>
                <li class="navbar__item horoscope">Horoscope</li>

            </ul>

            </nav>

        </header>
    `
}

export default headerCreate;