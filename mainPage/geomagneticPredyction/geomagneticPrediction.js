const geomagneticPrediction = async () => {
    const url = `https://services.swpc.noaa.gov/json/predicted_fredericksburg_a_index.json`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(`анализ геомагнитной активности за прошедшие сутки ${JSON.stringify(data, null, 2)}`)
        return data;
    } catch (error) {
        console.error("Ошибка при запросе геомагнитной активности:", error);
    }
}

export default geomagneticPrediction;