const geomagneticAnalysis = async () => {
    const url = `https://services.swpc.noaa.gov/json/predicted_fredericksburg_a_index.json`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при запросе геомагнитной активности:", error);
        throw error;
    }
}

export default geomagneticAnalysis;