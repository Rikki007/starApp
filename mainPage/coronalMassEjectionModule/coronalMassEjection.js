import apiKey from "./key.js";

const coronalMassEjection = async (startDate, endDate) => {
    const url = `https://api.nasa.gov/DONKI/CME?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Ошибка при запросе солнечных вспышек:", error);
    }
}

export default coronalMassEjection;