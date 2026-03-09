import {HanabiEvent} from "./eventModels";

export class EventRenderer {
    static createCardHTML(event: HanabiEvent): string {
        return `
            <div class="event-card">
                <div class="event-image">
                    <img src="${event.img}" alt="${event.imgTitle}">
                    <div class="event-date-badge">
                        <div class="day">${event.day}</div><div class="month">${event.month}</div>
                    </div>
                </div>
                <div class="event-content">
                    <h3><a href="${event.link}" target="_blank">${event.name}</a></h3>
                    <p>${event.descript}</p>
                    <div class="event-meta">
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            ${event.time}
                        </span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            ${event.location}
                        </span>
                    </div>
                </div>
            </div>`;
    }
}

