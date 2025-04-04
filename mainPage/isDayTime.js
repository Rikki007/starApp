import convertTimeToMinutes from "./convertTimeToMinutes.js";

const isDayTime = (currentTime, sunRise, sunSet) => {
    const current = currentTime.getHours() * 60 + currentTime.getMinutes();
    const sunriseMinutes = convertTimeToMinutes(sunRise);
    const sunsetMinutes = convertTimeToMinutes(sunSet);
    return current >= sunriseMinutes && current < sunsetMinutes;
};

export default isDayTime;