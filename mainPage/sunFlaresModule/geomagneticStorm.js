import apiKey from "./key.js";

const geomagneticStorms =  async (startDate, endDate) => {
    const url = `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при запросе геомагнитных бурь:", error);
    }
}

export default geomagneticStorms;