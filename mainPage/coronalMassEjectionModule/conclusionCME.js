import averageSpeed from "./averageSpeed.js";
import numOfEjections from "./numOfEjections.js";

const conclusionCME = (data) => {
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

export default conclusionCME;