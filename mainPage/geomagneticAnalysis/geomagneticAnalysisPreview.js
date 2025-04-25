import geomagneticAnalysis from "./geomagneticAnalysis.js";

const geomagneticAnalysisPreview = async () => {
    try {
        const signal = document.querySelector(".a-index__signal");
        const geomagneticAnalysisPrediction = document.querySelector(".a-index__prediction");
        const geomagneticAnalysisData = await geomagneticAnalysis();
        const data = geomagneticAnalysisData[0].afred_1_day;

        if (data < 16) {

            geomagneticAnalysisPrediction.textContent = 'Спокойная геомагнитная обстановка.';
            signal.classList.add('signal_blue');

        } else if (data >= 16 && data < 31) {

            geomagneticAnalysisPrediction.textContent = 'Небольшие возмущения (возможны слабые полярные сияния).';
            signal.classList.add('signal_light-blue');

        } else if (data >= 31 && data < 51) {

            geomagneticAnalysisPrediction.textContent = 'Умеренная геомагнитная буря (влияет на радиосвязь, навигационные системы).';

            signal.classList.add('signal_green');
        } else if (data >= 51 && data < 100) {

            geomagneticAnalysisPrediction.textContent = 'Сильная буря (риск сбоев в энергосетях, спутниковой связи).';
            signal.classList.add('signal_orange');

        } else if (data >= 100) {

            geomagneticAnalysisPrediction.textContent = 'Экстремальная буря (редкое событие, серьезные техногенные последствия).';
            signal.classList.add('signal_red');

        }

    } catch (error) {
        console.error("Ошибка при обработке запроса геомагнитной активности на завтра", error)
    }
}

export default geomagneticAnalysisPreview;