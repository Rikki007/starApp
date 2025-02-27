import localization from "../localization/localizationData.js";
import getLanguage from "../localization/localizationUtils.js";
import dateFilter from "./dateFilter.js";


const futureEvents = () => {

    const lang = getLanguage();
    const lunarEclipses = localization[lang].lunarEclipses;
    const solarEclipses =  localization[lang].solarEclipses;
    const retrogradMercuryDates = localization.en.retrogradMercuryDates;
    const eventTitles = localization[lang].futureEvents;

    const lunarEvent = dateFilter(lunarEclipses);
    const solarEvent = dateFilter(solarEclipses);
    const mercuryEvents = dateFilter(retrogradMercuryDates);
    const main = document.querySelector('.main');

    if (lunarEvent && solarEvent && mercuryEvents) {
        return main.innerHTML = `

            <section class="event-section">

                <h2 class="event-section__title">${eventTitles.eventSectionTitle}</h2>

                <article class="event-item">

                    <div class="image-container">
                        <img src="${lunarEvent.picture}" alt="${lunarEvent.name}" class="event-image">
                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${lunarEvent.name}.</h2>
                        <p class="container__description">${lunarEvent.description}.</p>
                        <h3 class="container__location">${eventTitles.containerLocation} ${lunarEvent.location}.</h3>
                        <h3 class="container__date">${eventTitles.containerDate} ${lunarEvent.date}.</h3>

                    </div>
                    
                </article>

                <article class="event-item">

                    <div class="image-container">
                        <img src="${solarEvent.picture}" alt="${solarEvent.name}" class="event-image">
                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${solarEvent.name}.</h2>
                        <p class="container__description">${solarEvent.description}.</p>
                        <h3 class="container__location">${eventTitles.containerLocation} ${solarEvent.location}.</h3>
                        <h3 class="container__date">${eventTitles.containerDate} ${solarEvent.date}.</h3>

                    </div>
                    
                </article>

                <article class="event-item">

                    <div class="image-container">

                        <img src="${mercuryEvents.picture}" alt="${mercuryEvents.name}" class="event-image">

                    </div>

                    <div class="event-container">

                        <h2 class="container__title">${eventTitles.name}.</h2>

                        <p class="container__description">${eventTitles.containerDescription}</p>

                        <h3 class="container__date">${eventTitles.containerDateStart} ${mercuryEvents.date} ${eventTitles.containerDateEnd} ${mercuryEvents.end}.</h3>

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