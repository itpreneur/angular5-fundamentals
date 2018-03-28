import { Address } from './address';
export class Userinfo {
    name: string;
    age: number;
    isActive: boolean;
    address: Address;

    constructor(name: string, age: number, addr1: string, addr2: string, state: string, city: string, zip: string, isActive: boolean = false) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
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
