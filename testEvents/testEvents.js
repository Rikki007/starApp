const testEvents = () => {
    // Лунное затмение
    let moonEclipse = Astronomy.SearchLunarEclipse(new Date());
    let moonEclipseTime = new Date(moonEclipse.peak); // Преобразуем в Date
    console.log(moonEclipse);
    console.log(`Лунное затмение: ${moonEclipseTime.toISOString()}`);
    console.log(moonEclipse.kind);

    // Солнечное затмение
    let sunEclipse = Astronomy.SearchGlobalSolarEclipse(new Date());
    let sunEclipseTime = new Date(sunEclipse.peak.date); // `peak` содержит вложенный объект
    console.log(sunEclipse);
    console.log(`Солнечное затмение: ${sunEclipseTime.toISOString()}`);
    console.log(sunEclipse.kind);

    // апогей перигей луны
    const date = new Date(); // Начальная дата поиска

    // Ищем ближайший апогей или перигей Луны
    const apsis = Astronomy.SearchLunarApsis(date);

    console.log(apsis);

    console.log(`Тип события: ${apsis.kind === 0 ? "Перигей" : "Апогей"}`);
    console.log(`Дата: ${new Date(apsis.time.date).toISOString()}`); // Используем `apsis.time.date`
    console.log(`Расстояние: ${apsis.dist_km.toFixed(2)} км`);

    // расвноденствия, солнцестояния

    const year = new Date().getFullYear();

    const seasons = Astronomy.Seasons(year);

    console.log(`Весеннее равноденствие: ${seasons.mar_equinox.date.toISOString().split('T')[0]}`);
    console.log(`Летнее солнцестояние: ${seasons.jun_solstice.date.toISOString().split('T')[0]}`);
    console.log(`Осеннее равноденствие: ${seasons.sep_equinox.date.toISOString().split('T')[0]}`);
    console.log(`Зимнее солнцестояние: ${seasons.dec_solstice.date.toISOString().split('T')[0]}`);

    // обьекты в созвездиях

    // Функция для определения созвездия по координатам объекта
    const getConstellation = (body) => {
        const observer = new Astronomy.Observer(0, 0, 0); // Создаём наблюдателя (широта, долгота, высота)
        const equatorial = Astronomy.Equator(body, new Date(), observer, false, true);
        return Astronomy.Constellation(equatorial.ra, equatorial.dec);
    };

    // Определяем созвездия для Солнца, Луны и планет
    const bodies = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    bodies.forEach(body => {
        const constellation = getConstellation(body);
        console.log(`${body} находится в созвездии ${constellation.name} (${constellation.symbol})`);
    });

    // ретроградное движение планет
    const planet = "Mars";
    const now = new Date();
    const isRetro = Astronomy.Elongation(planet, now).retrograde;
    console.log(isRetro)


};

export default testEvents;