import coronalMassFormingData from "./coronalMassFormingData.js";

const dataCMEOutput = async () => {
    const solarDescription = document.querySelector(".solar__description");
    const data = await coronalMassFormingData();

    console.log(data)

    const numOfEjections = (data) => {
        return data.length
    }

    const averageSpeed = (data) => {
        let speed = 0;

        data.forEach(item => {
            speed += item.speed; 
        });

        return Math.floor(speed / data.length);
    }

    const earthDirectedCME = (data) => {

        const earthDirectionData = data.filter(item => {
            return item.isEarthGB === true;
        });

        return earthDirectionData.length;
    }

    const arrivalDateCME = (data) => {
        const arrivalDateData = data.filter(item => {
            return item.estimatedShockArrivalTime !== false;
        });
        const sortedArrivalDateData = arrivalDateData.sort((a, b) => a.speed - b.speed)
        return sortedArrivalDateData[0]?.estimatedShockArrivalTime;
    }

    const conclusionCME = () => {
        const averageCMESpeed = averageSpeed(data);
        const numberCME = numOfEjections(data);
        let conclusion;
      
        if (numberCME > 15 && averageCMESpeed > 1000) {
            conclusion = "Очень большое количество выбросов с очень высокой средней скоростью. Экстремальная активность";
        } else if (numberCME >= 12 && numberCME <= 15 && averageCMESpeed > 1000) {
            conclusion = "Большое количество выбросов с очень высокой средней скоростью. Высокая активность";
        } else if (numberCME > 15 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
            conclusion = "Очень большое количество выбросов с высокой средней скоростью. Высокая активность";
        } else if (numberCME >= 12 && numberCME <= 15 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
            conclusion = "Большое количество выбросов с высокой средней скоростью. Высокая активность";
        } else if (numberCME >= 6 && numberCME < 12 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
            conclusion = "Умеренное количество выбросов с высокой средней скоростью. Высокая активность";
        } else if (numberCME >= 12 && numberCME <= 15 && averageCMESpeed >= 500 && averageCMESpeed < 800) {
            conclusion = "Большое количество выбросов с умеренной средней скоростью. Умеренная активность";
        } else if (numberCME >= 6 && numberCME < 12 && averageCMESpeed >= 500 && averageCMESpeed < 800) {
          conclusion = "Умеренное количество выбросов с умеренной средней скоростью. Умеренная активность";
        } else if (numberCME < 6 && averageCMESpeed > 1000) {
            conclusion = "Малое количество выбросов с очень высокой средней скоростью. Высокая активность";
        } else if (numberCME < 6 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
            conclusion = "Малое количество выбросов с высокой средней скоростью. Умеренная активность";
        } else if (numberCME < 6 && averageCMESpeed >= 500 && averageCMESpeed < 800) {
            conclusion = "Малое количество выбросов с умеренной средней скоростью. Умеренная активность";
        } else if (numberCME >= 6 && numberCME < 12 && averageCMESpeed < 500) {
            conclusion = "Умеренное количество выбросов с низкой средней скоростью. Низкая активность";
        } else {
            conclusion = "Малое количество выбросов с низкой средней скоростью. Низкая активность";
        }

        return conclusion;
      };

    solarDescription.innerHTML = `
        <p class="block__description">За последние три дня произошло выбросов коронарных масс: ${numOfEjections(data)}.</p>
        <p class="block__description">Средняя скорость выбросов: ${averageSpeed(data)}км/с.</p>
        <p class="block__description">Количество выбросов направленных в сторону земли: ${earthDirectedCME(data)}.</p>
        <p class="block__description">Приблизительная дата воздействия на магнитосферу земли: ${arrivalDateCME(data)}.</p>
        
    `

}

export default dataCMEOutput;