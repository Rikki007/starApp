import geomagneticActivity from "./geomagneticActivity.js"

const kpIndexEstimatedPreview = async () => {
    try {
        const estimatedKp = document.querySelector(".kp-index__estimated");
        const geomagneticData = await geomagneticActivity();
        const data = geomagneticData[geomagneticData.length - 1];
        console.log(data)

        if (data.estimated_kp > data.kp_index) {
            estimatedKp.textContent = 'Прогнозируется повышение геомагнитной активности.';
        } else if (data.estimated_kp === data.kp_index) {
            estimatedKp.textContent = 'Геомагнитная активность остаётся стабильной.';
        } else if (data.estimated_kp < data.kp_index) {
            estimatedKp.textContent = 'Прогнозируется снижение геомагнитной активности.';
        }        
        
    } catch (error) {
        console.error("Ошибка в обработке предварительного индекса Kp:", error);
    }
}

export default kpIndexEstimatedPreview;