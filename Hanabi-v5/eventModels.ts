interface IHanabiEvent{
    id: number;
    img: string;
    imgTitle: string;
    day: string;
    month: string;
    name: string;
    link: string;
    descript: string;
    time: string;
    location: string;
};

export class HanabiEvent implements IHanabiEvent{
    id: number;
    img: string;
    imgTitle: string;
    day: string;
    month: string;
    name: string;
    link: string;
    descript: string;
    time: string;
    location: string;

    constructor(id: number, img: string, imgTitle: string, day: string, month: string,
             name: string, link: string, descript: string, time: string, location: string) {
        this.id = id;
        this.img = img;
        this.imgTitle = imgTitle;
        this.day = day;
        this.month = month;
        this.name = name;
        this.link = link;
        this.descript = descript;
        this.time = time;
        this.location = location;
    }
}