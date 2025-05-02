import apiKey from "./key.js";

const coronalMassEjection = async () => {

    const date = new Date();
    const twoDaysAgo = new Date(date);
    twoDaysAgo.setDate(date.getDate() - 2);
    const todayDate = date.toISOString().split('T')[0];
    const twoDaysAgoDate = twoDaysAgo.toISOString().split('T')[0];

    const url = `https://api.nasa.gov/DONKI/CME?startDate=${twoDaysAgoDate}&endDate=${todayDate}&api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при запросе солнечных вспышек:", error);
        throw error;
    }
}

export default coronalMassEjection;