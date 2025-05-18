import averageSpeed from "./averageSpeed.js";
import numOfEjections from "./numOfEjections.js";

const conclusionCME = (data) => {
    const averageCMESpeed = averageSpeed(data);
    const numberCME = numOfEjections(data);
    let conclusion;
  
    if (numberCME > 15 && averageCMESpeed > 1000) {
        conclusion = "Экстремальная активность";
    } else if (numberCME >= 12 && numberCME <= 15 && averageCMESpeed > 1000) {
        conclusion = "Высокая активность";
    } else if (numberCME > 15 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
        conclusion = "Высокая активность";
    } else if (numberCME >= 12 && numberCME <= 15 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
        conclusion = "Высокая активность";
    } else if (numberCME >= 6 && numberCME < 12 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
        conclusion = "Высокая активность";
    } else if (numberCME >= 12 && numberCME <= 15 && averageCMESpeed >= 500 && averageCMESpeed < 800) {
        conclusion = "Умеренная активность";
    } else if (numberCME >= 6 && numberCME < 12 && averageCMESpeed >= 500 && averageCMESpeed < 800) {
      conclusion = "Умеренная активность";
    } else if (numberCME < 6 && averageCMESpeed > 1000) {
        conclusion = "Высокая активность";
    } else if (numberCME < 6 && averageCMESpeed >= 800 && averageCMESpeed <= 1000) {
        conclusion = "Умеренная активность";
    } else if (numberCME < 6 && averageCMESpeed >= 500 && averageCMESpeed < 800) {
        conclusion = "Умеренная активность";
    } else if (numberCME >= 6 && numberCME < 12 && averageCMESpeed < 500) {
        conclusion = "Низкая активность";
    } else {
        conclusion = "Низкая активность";
    }

    return conclusion;
};

export default conclusionCME;