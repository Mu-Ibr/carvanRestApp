export class UsersAuth{
    constructor(
        public username: string,
        public password: string,
        public workerName: string,
        public type: string
    ){}
}