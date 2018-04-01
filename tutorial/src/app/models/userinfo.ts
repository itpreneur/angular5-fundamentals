import { Address } from './address';
export class Userinfo {
    name: string;
    age: number;
    datehired: Date;
    salary: number;
    isActive: boolean;
    address: Address;

    constructor(name: string, age: number, addr1: string, addr2: string, state: string,
        city: string, zip: string, datehired: Date, salary: number = 0, isActive: boolean = false) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
        this.salary = salary;
        this.datehired = datehired;
        //Address field
        this.address = new Address();
        this.address.addr1 = addr1;
        this.address.addr2 = addr2;
        this.address.state = state;
        this.address.city = city;
        this.address.zip = zip;

    }
    showAge() {
        return this.age;
    }
}
