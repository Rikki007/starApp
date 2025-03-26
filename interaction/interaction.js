const interaction = () => {
    const main = document.querySelector('.main');

    main.innerHTML = `
        <section class="rule">
            <h3 class="rule__title">Правила взаимодействия:</h3>
            <p class="rule-description">Для получения описания взаимодействий знаков, выберете два знака на зодиакальной розе, путем нажатия на круглые иконки, а затем нажмите на кнопку "Получить". Описание появится под зодиакальной розой.</p>
            <h3 class="rule__title">Факторы расчета взаимодействий:</h3>
            <p class="rule-description">Взаимодействие знаков зависит от трёх ключевых параметров:</p>
            <p class="rule-description">1. Стихии.</p>
            <p class="rule-description">Каждый знак принадлежит одной из четырёх стихий:</p>
            
            <ul>

                <li>
                    <p><strong>Огонь</strong> (Овен, Лев, Стрелец)</p>
                </li>
                <li>
                    <p><strong>Земля</strong> (Телец, Дева, Козерог)</p>
                </li>
                <li>
                    <p><strong>Воздух</strong> (Близнецы, Весы, Водолей)</p>
                </li>
                <li>
                    <p><strong>Вода</strong> (Рак, Скорпион, Рыбы)</p>
                </li>

            </ul>
            <p>Правила совместимости стихий.</p>
            <ul>

                <li>
                    <p>✅ <strong>Гармония</strong>:</p>
                    <ul>
                        <li>
                            <p>Огонь ↔ Воздух (подпитывают друг друга)</p>
                        </li>
                        <li>
                            <p>Земля ↔ Вода (стабильность и эмоции)</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>⚠️ <strong>Нейтрально</strong>:</p>
                    <ul>
                        <li>
                            <p>Огонь ↔ Земля (борьба энергии и практичности)</p>
                        </li>
                        <li>
                            <p>Воздух ↔ Вода (рациональность vs чувства)</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>❌ <strong>Конфликт</strong>:</p>
                    <ul>
                        <li>
                            <p>Огонь ↔ Вода (огонь гасит воду, вода тушит огонь)</p>
                        </li>
                        <li>
                            <p>Земля ↔ Воздух (практичность vs абстракция)</p>
                        </li>
                    </ul>
                </li>

            </ul>
            <p class="rule-description">2. Кресты(качества).</p>
            <p class="rule-description">Знаки делятся на три креста по их качествам:</p>
            <ul>
                <li>
                    <p><strong>Кардинальные</strong> (Овен, Рак, Весы, Козерог) — инициаторы, лидеры.</p>
                </li>
                <li>
                    <p><strong>Фиксированные</strong> (Телец, Лев, Скорпион, Водолей) — стабильные, упрямые.</p>
                </li>
                <li>
                    <p><strong>Мутабельные</strong> (Близнецы, Дева, Стрелец, Рыбы) — гибкие, адаптивные.</p>
                </li>
            </ul>
            <p>Правила:</p>
            <ul>
                <li>
                    <p>✅ <strong>Гармония</strong>:</p>
                    <ul>
                        <li>
                            <p>Кардинальный ↔ Мутабельный (инициатива + адаптивность).</p>
                        </li>
                        <li>
                            <p>Фиксированный ↔ Фиксированный (оба ценят стабильность, но возможны конфликты из-за упрямства).</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>❌ <strong>Конфликт</strong>:</p>
                    <ul>
                        <li>
                            <p>Кардинальный ↔ Кардинальный (борьба за лидерство).</p>
                        </li>
                        <li
                            <p>Фиксированный ↔ Мутабельный (стабильность vs перемены).</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <p class="rule-description">2. Полярности.</p>
            <ul>
                <li>
                    <p><strong>Мужская</strong>: Овен, Близнецы, Лев, Весы, Стрелец, Водолей (активные, экстравертные).</p>
                </li>
                <li>
                    <p><strong>Женская</strong>: Телец, Рак, Дева, Скорпион, Козерог, Рыбы (пассивные, интровертные).</p>
                </li>
            </ul>
            <p>Правила:</p>
            <ul>
                <li>
                    <p>✅ <strong>Мужская + женская</strong> часто дополняют друг друга (например, активный Овен + спокойный Телец).</p>
                </li>
                <li>
                    <p>❌ <strong>Мужская + Мужская</strong> часто конкурируют(например, активный Овен + доминантный Лев).</p>
                </li>
            </ul>
        </section> 
        <section class="sign-section">
            <div class="sign-section-container">
                <div class="rose">
                    <img src="./assets/icons/rose.svg" alt="pic" class="rose-pic">
                </div>
                <div class="rose-sign aries-sign">
                    <img src="./assets/icons/zodiacSighns/aries.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign taurus-sign">
                    <img src="./assets/icons/zodiacSighns/taurus.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign gemini-sign">
                    <img src="./assets/icons/zodiacSighns/gemini.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign cancer-sign">
                    <img src="./assets/icons/zodiacSighns/cancer.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign leo-sign">
                    <img src="./assets/icons/zodiacSighns/leo.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign virgo-sign">
                    <img src="./assets/icons/zodiacSighns/virgo.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign libra-sign">
                    <img src="./assets/icons/zodiacSighns/libra.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign scorpio-sign">
                    <img src="./assets/icons/zodiacSighns/scorpio.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign sagittarius-sign">
                    <img src="./assets/icons/zodiacSighns/sagittarius.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign capricorn-sign">
                    <img src="./assets/icons/zodiacSighns/capricorn.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign aquarius-sign">
                    <img src="./assets/icons/zodiacSighns/aquarius.svg" alt="pic" class="rose-sign-pic">
                </div>
                <div class="rose-sign pisces-sign">
                    <img src="./assets/icons/zodiacSighns/pisces.svg" alt="pic" class="rose-sign-pic">
                </div>
            </div>
        </section>
        <section class="description-section"></section>
    `

}

export default interaction;