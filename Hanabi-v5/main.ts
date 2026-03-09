import {HanabiEvent} from "./eventModels";
import { EventRenderer } from './eventRenderer';
    
// Store data
const eventsData: HanabiEvent[] = [
   new HanabiEvent(
        1, "images/SumidagawaAI.png",
        "Sumidagawa Hanabi Festival - AI-generated illustration",
        "25", "Jul", "Sumidagawa Hanabi Festival",
        "https://www.sumidagawa-hanabi.com",
        "Sumidagawa Fireworks Festival is the oldest recorded fireworks display in Japan, dating back to 1733. It is a quintessential Tokyo summer tradition held to ward off evil spirits and entertain the masses.",
        "19:00 ~ 20:30", "隅田川, Tokyo, Japan"
    ),
    new HanabiEvent(
        2, "images/NagaokaAI.png",
        "Nagaoka Hanabi Festival - AI-generated illustration",
        "02", "Aug", "Nagaoka Hanabi Festival",
        "https://nagaokamatsuri.com",
        "First started in 1946 as a war-damage reconstruction event to mourn the deceased of WWII, the Nagaoka Fireworks Festival in Niigata Prefecture carries on the spirit of Japan through the decades.",
        "19:20 ~ 21:10", "信濃川の河川敷, Niigata, Japan"
    ),
    new HanabiEvent(
        3, "images/SuwakoAI.png",
        "Suwako Hanabi Festival - AI-generated illustration",
        "15", "Aug", "Suwako Hanabi Festival",
        "https://suwako-hanabi.com",
        "Known for launching one of the highest numbers of shells in Japan (over 40,000), this festival uses the natural mountain landscape surrounding Lake Suwa to create a thunderous acoustic experience.",
        "19:00 ~ 21:00", "諏訪湖, Nagano, Japan"
    ),
    new HanabiEvent(
        4, "images/AkagawaAI.png",
        "Akagawa Hanabi Festival - AI-generated illustration",
        "15", "Aug", "Akagawa Hanabi Festival",
        "https://akagawahanabi.com",
        "Consistently ranked as one of the most beautiful displays in Japan, Akagawa is famous for its 'wide-star-mine' sequences that span over 700 meters, synchronizing cutting-edge pyrotechnics with music.",
        "18:45 ~ 21:00", "赤川河畔, Yamagata, Japan"
    ),
    new HanabiEvent(
        5, "images/OmagariAI.png",
        "Omagari Hanabi Festival - AI-generated illustration",
        "29", "Aug", "Omagari Hanabi Festival",
        "https://www.omagari-hanabi.com/",
        "Witness breathtaking fireworks explode above accompanied by stories and music, which brings the show of light and sound together in a friendly festival setting at the end of August in the Daisen area.",
        "17:10 ~ 21:30", "大曲の花火公園, Akita, Japan"
    ),
    new HanabiEvent(
        6, "images/TsuchiuraAI.png",
        "Tsuchiura Hanabi Festival - AI-generated illustration",
        "01", "Nov", "Tsuchiura Hanabi Competition",
        "https://www.tsuchiura-hanabi.jp",
        "Tsuchiura All Japan Fireworks Competition is held every year in early November, to celebrate autumn harvest and thank farmers for their important work.",
        "17:30 ~ 20:00", "桜川畔, Ibaraki, Japan"
    ),
];


const main = (containerId: string, events: HanabiEvent[]): void => {
    
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("No container found");
        return;
    }

    let htmlContent: string = "";

    // For Loop
    events.forEach((event: HanabiEvent) => {
        htmlContent += EventRenderer.createCardHTML(event);
    });

    // Put HTML into container
    container.innerHTML = htmlContent;
};

// Execute
document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input') as HTMLInputElement;

    if (searchInput) {
        // Every typing
        searchInput.addEventListener('input', (e) => {
            const keyword = (e.target as HTMLInputElement).value.toLowerCase();
            // filiter
            const searchedData = eventsData.filter(event => 
                event.name.toLowerCase().includes(keyword) || event.month.toLowerCase().includes(keyword)
            );
            
            // Update UI
            main('events-container', searchedData);
        });
    }

    main('events-container', eventsData);
});