import apiKey from "./key.js";

const coronalMassEjection = async () => {

    const date = new Date();
    const threeDaysAgo = new Date(date);
    threeDaysAgo.setDate(date.getDate() - 3);
    const todayDate = date.toISOString().split('T')[0];
    const threeDaysAgoDate = threeDaysAgo.toISOString().split('T')[0];

    const url = `https://api.nasa.gov/DONKI/CME?startDate=${threeDaysAgoDate}&endDate=${todayDate}&api_key=${apiKey}`;
    
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