// import { Login, User } from 'interfaces';

import * as UserLogin from './interfaces'

interface Adress {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements UserLogin.Login{
    #id: number;
    protected name:string
    address : Adress

    get empId() : number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount() :number{
        return 50;
    }

    constructor(id:number, name:string, address: Adress) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    login(): UserLogin.User {
        // throw new Error('Method not implemented.');
        return {name: 'John', id:1, email:""}

    }
    getNameWithAdress() :string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john= new Employee(1, "John", { street: "ABC", city: "Bangalore", state : "Karanataka", pin: "560076"});

john.empId = 100;
console.log(john.empId)

// Employee.getEmployeeCount();

class Manager extends Employee{

    constructor(id:number, name:string, address:{ street: "ABC", city: "Bangalore", state : "Karanataka", pin: "560076"}) {
        super(id, name, address);
    }
    getNameWithAdress(): string {
        return super.getNameWithAdress();
    }

}

let address = john.getNameWithAdress();
// john.id= 1;
// john.name= "John";
// john.address= "Highway 71";

console.log(address);

let mike = new Manager(2,"Mike", { street: "ABC", city: "Bangalore", state : "Karanataka", pin: "560076"})
console.log(mike.getNameWithAdress());