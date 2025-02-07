import main from "../main/main.js";
import lunarEclipses from "./LunarEclipses.js";
import solarEclipses from "./solarEclipses.js";
import dateFilter from "./dateFilter.js";
import retrogradMercuryDates from "./retrogradMercury.js";
const futureEvents = () => {
    const lunarEvent = dateFilter(lunarEclipses);
    const solarEvent = dateFilter(solarEclipses);
    const mercuryEvents = dateFilter(retrogradMercuryDates);
    console.log(mercuryEvents)

    if (lunarEvent && solarEvent && mercuryEvents) {
        main.innerHTML = `
            <section class="event-section">
                <h2>Future Events</h2>
                <article class="event-item">

                    <div class="image-container">
                        <img src="${lunarEvent.picture}" alt="${lunarEvent.name}" class="event-image">
                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${lunarEvent.name}.</h2>
                        <p class="container__description">${lunarEvent.description}.</p>
                        <h3 class="container__location">Location: ${lunarEvent.location}.</h3>
                        <h3 class="container__date">Date: ${lunarEvent.date}.</h3>

                    </div>
                    
                </article>

                <article class="event-item">

                    <div class="image-container">
                        <img src="${solarEvent.picture}" alt="${solarEvent.name}" class="event-image">
                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${solarEvent.name}.</h2>
                        <p class="container__description">${solarEvent.description}.</p>
                        <h3 class="container__location">Location: ${solarEvent.location}.</h3>
                        <h3 class="container__date">Date: ${solarEvent.date}.</h3>

                    </div>
                    
                </article>

                <article class="event-item">

                    <div class="image-container">
                        <img src="${mercuryEvents.picture}" alt="${mercuryEvents.name}" class="event-image">
                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${mercuryEvents.name}.</h2>
                        <p class="container__description">
                            Retrograde Mercury is an astronomical event that occurs when Mercury, the closest planet to the Sun, appears to move backward in its orbit from Earth's perspective. This phenomenon happens three to four times a year and lasts about three weeks each time. It is an optical illusion caused by the differing orbital speeds of Earth and Mercury as they travel around the Sun. During this period, Mercury doesn't actually reverse direction but appears to do so due to the relative motion between the two planets.

                            From an astrological perspective, Mercury retrograde is often associated with communication breakdowns, technological glitches, and misunderstandings. Astrologers believe that since Mercury rules communication, travel, and technology, its retrograde motion can disrupt these areas of life. People may experience delays, miscommunications, or challenges in making decisions. It is often advised to avoid signing contracts, starting new projects, or making major purchases during this time, as plans may not unfold as expected.

                            However, Mercury retrograde is not all negative. Astrologically, it is seen as a time for reflection, revisiting past projects, and reconnecting with old friends or unresolved issues. It encourages slowing down, reviewing plans, and paying attention to details. While it can be a frustrating period, it also offers an opportunity to reassess and realign with one's goals. Many people use this time to reorganize, reflect, and prepare for a fresh start once Mercury goes direct again. Despite its reputation, Mercury retrograde is a natural cycle that can be navigated with mindfulness and patience.
                        </p>
                        <h3 class="container__date">Starts from ${mercuryEvents.date} to ${mercuryEvents.end}.</h3>

                    </div>
                    
                </article>

            </section>
        `;
    } else {
        main.innerHTML = `
            <section class="event-section">
                <article class="event-item">
                    <h2 class="event-title">No upcoming events found</h2>
                </article>
            </section>
        `;
    }
}

export default futureEvents;