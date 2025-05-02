import geomagneticAnalysis from "./geomagneticAnalysis.js";

const geomagneticAnalysisPreview = async () => {
    try {

        const geomagneticAnalysisPrediction = document.querySelector(".a-index__prediction");
        const geomagneticAnalysisData = await geomagneticAnalysis();
        const data = geomagneticAnalysisData[0].afred_1_day;

        if (data < 16) {

            geomagneticAnalysisPrediction.textContent = 'Спокойная геомагнитная обстановка.';

        } else if (data >= 16 && data < 31) {

            geomagneticAnalysisPrediction.textContent = 'Небольшие возмущения (возможны слабые полярные сияния).';

        } else if (data >= 31 && data < 51) {

            geomagneticAnalysisPrediction.textContent = 'Умеренная геомагнитная буря (влияет на радиосвязь, навигационные системы).';

        } else if (data >= 51 && data < 100) {

            geomagneticAnalysisPrediction.textContent = 'Сильная буря (риск сбоев в энергосетях, спутниковой связи).';

        } else if (data >= 100) {

            geomagneticAnalysisPrediction.textContent = 'Экстремальная буря (редкое событие, серьезные техногенные последствия).';

        }

    } catch (error) {

        console.error("Ошибка при обработке запроса геомагнитной активности на завтра", error);

    }
}

export default geomagneticAnalysisPreview;