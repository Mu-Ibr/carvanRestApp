import { Table } from "./Table.model";
import { WaiterMenuItem } from "./WaiterMenuItem.model";

export class Order{
    constructor(
        public table: Table,
        public totalSum: number,
        public orderItem: String
    ){}
}