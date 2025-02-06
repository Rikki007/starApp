import main from "../main/main.js";
import lunarEclipses from "./LunarEclipses.js";
import solarEclipses from "./solarEclipses.js";
import dateFilter from "./dateFilter.js";

const futureEvents = () => {
    const lunarEvent = dateFilter(lunarEclipses);
    const solarEvent = dateFilter(solarEclipses);

    if (lunarEvent && solarEvent) {
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