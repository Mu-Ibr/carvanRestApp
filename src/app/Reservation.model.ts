import { Time } from "@angular/common";

export class Reservation{
    constructor(
        public date: Date,
        public name: string,
        public numOfClients: number,
        public time: Time
    ){}
}