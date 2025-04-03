const initializeTimeUpdater = () => {
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    setInterval(() => {
        const currentDate = new Date();
        dateElement.textContent = `Текущая дата: ${currentDate.toLocaleDateString()}`;
        timeElement.textContent = `Текущее время: ${currentDate.toLocaleTimeString()}`;
    }, 1000);
};

export default initializeTimeUpdater;