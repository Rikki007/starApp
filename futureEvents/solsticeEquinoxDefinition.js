import dateComparison from "./dateComperison.js";

const solsticeEquinoxDefinition = () => {
    const year = new Date().getFullYear();
    const today = new Date();
    

    let seasons = Astronomy.Seasons(year);
    let events = [
        {
            name: "весеннего равноденствия",
            date: seasons.mar_equinox.date,
        },
        {
            name: "летнего солнцестояния",
            date: seasons.jun_solstice.date,
        },
        {
            name: "осеннего равноденствия",
            date: seasons.sep_equinox.date,
        },
        {
            name: "зимнего солнцестояния",
            date: seasons.dec_solstice.date,
        },
    ];
    
    let nextEvent = events.find(event => event.date > today);
    
    if (!nextEvent) {
        const nextYearSeasons = Astronomy.Seasons(year + 1);
        nextEvent = {
            name: "весеннего равноденствия",
            date: nextYearSeasons.mar_equinox.date,
        };
    }

    return `Дней до ${nextEvent.name}: ${dateComparison(today, nextEvent.date)}.`
};


export default solsticeEquinoxDefinition;