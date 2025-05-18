import weatherPreview from "./weatherPreview.js";

const weatherLastResp = async () => {
    try {
        const lastCity = localStorage.getItem('lastRespCity');
        
        if (!lastCity) return;

        await weatherPreview(lastCity);

        const lastResp = document.querySelector(".last-resp");
        if (lastResp) {
            lastResp.textContent = `Последний запрос для города: ${lastCity}.`;
        }
    } catch (error) {
        console.error("Ошибка в weatherLastResp:", error);
    }
};

export default weatherLastResp;