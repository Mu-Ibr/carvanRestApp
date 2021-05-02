export class Expense{
    constructor(
        public nameFor: string,
        public amount: number,
        public dueDate: Date,
        public type: string,
    ){}
}