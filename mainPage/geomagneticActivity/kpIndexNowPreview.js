import geomagneticActivity from "./geomagneticActivity.js"

const kpIndexNowPreview = async () => {
    try {
        const kpIndex = document.querySelector(".kp-index__now");
        const signal = document.querySelector(".kp-index__signal")
        const geomagneticData = await geomagneticActivity();
        const data = geomagneticData[geomagneticData.length - 1];
        console.log(data)

        if (data.kp_index < 2) {

            kpIndex.textContent = 'Геомагнитная активность на минимуме, магнитосфера стабильна.';
            signal.classList.add('kp-index__signal_blue');

        } else if (data.kp_index >= 2 && data.kp_index < 4) {

            kpIndex.textContent = 'Незначительные возмущения магнитосферы.';
            signal.classList.add('kp-index__signal_light-blue');

        } else if (data.kp_index >= 4 && data.kp_index < 5) {

            kpIndex.textContent = 'Магнитосфера начинает проявлять повышенную активность, возможны локальные возмущения.';

            signal.classList.add('kp-index__signal_green');
        } else if (data.kp_index >= 5 && data.kp_index < 7) {

            kpIndex.textContent = 'Геомагнитная буря.';
            signal.classList.add('kp-index__signal_yellow');

        } else if (data.kp_index >= 7 && data.kp_index < 9) {

            kpIndex.textContent = 'Значительные геомагнитные возмущения. Сильная буря.';
            signal.classList.add('kp-index__signal_orange');

        } else if (data.kp_index === 9) {

            kpIndex.textContent = 'Очень мощная буря. Возможны сбои в электросетях, спутниковых системах и связи.';
            signal.classList.add('kp-index__signal_red');

        }     
        
    } catch (error) {
        console.error("Ошибка в обработке предварительного индекса Kp:", error);
    }
}

export default kpIndexNowPreview;