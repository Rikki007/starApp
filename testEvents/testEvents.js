const testEvents = () => {
    let eclipse = Astronomy.SearchLunarEclipse(new Date());
    let eclipseTime = new Date(eclipse.peak); // Преобразуем в Date
    console.log(`Лунное затмение: ${eclipseTime.toISOString()}`);
};

export default testEvents;