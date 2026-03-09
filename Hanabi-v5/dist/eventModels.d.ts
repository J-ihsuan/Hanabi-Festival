interface IHanabiEvent {
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
}
export declare class HanabiEvent implements IHanabiEvent {
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
    constructor(id: number, img: string, imgTitle: string, day: string, month: string, name: string, link: string, descript: string, time: string, location: string);
}
export {};
//# sourceMappingURL=eventModels.d.ts.map