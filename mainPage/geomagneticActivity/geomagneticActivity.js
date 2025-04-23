const geomagneticActivity = async () => {
    const url = `https://services.swpc.noaa.gov/json/planetary_k_index_1m.json`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(`геомагнитная активность сейчас ${JSON.stringify(data, null, 2)}`)
        return data;
    } catch (error) {
        console.error("Ошибка при запросе геомагнитной активности:", error);
    }
}

export default geomagneticActivity;