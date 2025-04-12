const getMoonData = async (date, timezone) => {
    const baseUrl = "https://api.mooncalendar.com/data"; // Адрес API
    const queryParams = `?date=${date}&timezone=${timezone}&format=json`; // Параметры запроса
    const url = baseUrl + queryParams;

    try {
        const response = await fetch(url); // Выполняем запрос
        if (!response.ok) {
            throw new Error(`HTTP ошибка: ${response.status}`);
        }
        const moonData = await response.json(); // Парсим ответ
        console.log("Данные о Луне:", moonData); // Выводим результат
        return moonData; // Возвращаем данные
    } catch (error) {
        console.error("Ошибка получения данных о Луне:", error); // Ловим ошибки
    }
}
