import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../models/userinfo';


@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  users: Userinfo[];
  rh_users: Userinfo[] = [];
  addTop: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.users = [
      new Userinfo('John Andrew', 26, '456 5th St.', '', 'NJ', 'Red Bank', '56789', new Date('1998-02-03'), 15000),
      new Userinfo('Jane Doe', 25, '99 Nothing Hill', '', 'MX', 'Tijuana ', '56789', new Date('2012-12-23'), 13000),
      new Userinfo('Maria DB', 35, '299 Somewhere There', '', 'PL', 'Earth ', '00000', new Date('2015-10-13'), 12500.82),
      new Userinfo('Naomi Bell', 37, '459 Nowhere ', '', 'KL', 'Kaola ', '15233', new Date('1999-04-12'), 25000.22),
      new Userinfo('Chris Nolan ', 22, '67 RainbowLand', '', 'HK', 'Hongkong ', '78323', new Date('2002-09-10'), 15900)

    ]
  }
  delete(user: Userinfo) {
    //console.log('delete', user, );
    var idx: number = this.users.indexOf(user);
    this.users.splice(idx, 1);
    this.rh_users.push(user);
  }
  add(user: Userinfo) {
    //console.log('add', user)
    var idx: number = this.rh_users.indexOf(user);
    //console.log('idx', idx)
    this.rh_users.splice(idx, 1);
    if (this.addTop)
      this.users.unshift(user);
    else
      this.users.push(user);
  }
  addUser(name: HTMLInputElement, age: HTMLInputElement, addr1: HTMLInputElement,
    addr2: HTMLInputElement, state: HTMLInputElement, city: HTMLInputElement, zip: HTMLInputElement) {
    console.log('adduser', name.value, age.value, addr1.value, addr2.value);
    let _user = new Userinfo(name.value, Number(age.value), addr1.value, addr2.value, state.value, city.value, zip.value, null, 1000);
    this.users.push(_user);

  }
}
