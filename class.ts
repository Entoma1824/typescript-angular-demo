class Employee {
    #id: number;
    protected name:string
    address : string;

    get empId() : number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount() :number{
        return 50;
    }

    constructor(id:number, name:string, address:string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    getNameWithAdress() :string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john= new Employee(1, "John", "Highway 71");

john.empId = 100;
console.log(john.empId)

// Employee.getEmployeeCount();

class Manager extends Employee{

    constructor(id:number, name:string, address:string) {
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

let mike = new Manager(2,"Mike", "Cherise Drive")
console.log(mike.getNameWithAdress());