import solarFlares from "./solarFlares.js";
import geomagneticStorms from "./geomagneticStorm.js";

async function spaceWeatherData() {
    const today = new Date().toISOString().split("T")[0];
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    const solarFlaresData = await solarFlares(twoDaysAgo, today);
    const geomagneticStormsData = await geomagneticStorms(today, today);

    return {
        solarFlaresData,
        geomagneticStormsData,
    };
}

export default spaceWeatherData;
