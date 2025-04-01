const mainPage = () => {
    const main = document.querySelector(".main");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Создаём основную структуру один раз
    main.innerHTML = `
        <section class="main-wrapper">
            <div class="main-wrapper-block">
                <p class="block__description">Часовой пояс: ${timeZone}</p>
                <p id="current-date" class="block__description">Текущая дата: </p>
                <p id="current-time" class="block__description">Текущее время: </p>
            </div>
            <div class="main-wrapper-block"></div>
            <div class="main-wrapper-block"></div>
        </section>
    `;

    // Получаем ссылки на элементы для обновления
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    // Обновляем только время и дату, не трогая остальной DOM
    setInterval(() => {
        const currentDate = new Date();
        dateElement.textContent = `Текущая дата: ${currentDate.toLocaleDateString()}`;
        timeElement.textContent = `Текущее время: ${currentDate.toLocaleTimeString()}`;
    }, 1000);
};

export default mainPage;