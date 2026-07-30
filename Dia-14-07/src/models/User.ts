export class User {

    constructor(public id: number, public name: string, public email:string, public age:number, public password:string){}

}

export let users: User[] = []