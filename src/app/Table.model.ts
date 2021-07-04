import { WaiterMenuItem } from "./WaiterMenuItem.model";

export class Table{
    constructor(
        public tableNum: number,
        public waiterName: string,
        public isTaken: boolean,
        public orderedItems: WaiterMenuItem[],
        public totalSum: number,
        public numberOfClients: number
    ){}
}