const ultravioletActivity = async () => {
    const url = `https://services.swpc.noaa.gov/json/predicted_f107cm_flux.json`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(`интенсивность ультрафиолетового излучения ${JSON.stringify(data, null, 2)}`)
        return data;
    } catch (error) {
        console.error("Ошибка при запросе ультрафиолетовой активности:", error);
    }
}

export default ultravioletActivity;