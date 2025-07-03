import solsticeEquinoxDefinition from "./solsticeEquinoxDefinition.js";

const todaySolsticeEquinox = () => {
    const year = new Date().getFullYear();
    const today = new Date().toISOString().split("T")[0];
    let seasons = Astronomy.Seasons(year);
    let event;
    let events = [
        { name: "Сегодня весеннее равноденствие", date: seasons.mar_equinox.date.toISOString().split("T")[0] },
        { name: "Сегодня летнее солнцестояние", date: seasons.jun_solstice.date.toISOString().split("T")[0] },
        { name: "Сегодня осеннее равноденствие", date: seasons.sep_equinox.date.toISOString().split("T")[0] },
        { name: "Сегодня зимнее солнцестояние", date: seasons.dec_solstice.date.toISOString().split("T")[0] },
    ];

    let nextEvent = events.find(event => event.date === today);

    if (nextEvent) {
        event = nextEvent.name;
    }

    if (!nextEvent) {
        event = solsticeEquinoxDefinition();
    }

    return event;
}

export default todaySolsticeEquinox;