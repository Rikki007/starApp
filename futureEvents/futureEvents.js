import main from "../main/main.js";
import dateFilter from "./dateFilter.js";

const futureEvents = () => {
    const nextEvent = dateFilter();

    if (nextEvent) {
        main.innerHTML = `
            <section class="event-section">
                <article class="event-item">

                    <div class="image-container">
                        <img src="./assets/images/events/totalLunarEclipse.jpg" alt="${nextEvent.name}" class="event-image">
                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${nextEvent.name}.</h2>
                        <p class="container__description">${nextEvent.description}.</p>
                        <h3 class="container__location">Location: ${nextEvent.location}.</h3>
                        <h3 class="container__date">Date: ${nextEvent.date}.</h3>

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