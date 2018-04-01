import { Injectable } from '@angular/core';
import { Userinfo } from '../../models/userinfo';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  users: Userinfo[];
  data: Observable<any>;

  constructor() {
    this.users = [
      new Userinfo('John Andrew', 26, '456 5th St.', '', 'NJ', 'Red Bank', '56789', new Date('02/03/1998 08:30'), 15000, true),
      new Userinfo('Jane Doe', 25, '99 Nothing Hill', '', 'MX', 'Tijuana ', '56789', new Date('12/23/2012 12:35:22'), 13000, false),
      new Userinfo('Maria DB', 35, '299 Somewhere There', '', 'PL', 'Earth ', '00000', new Date('10/13/2015 14:32:33'), 12500.82, true),
      new Userinfo('Naomi Bell', 37, '459 Nowhere ', '', 'KL', 'Kaola ', '15233', new Date('04/12/1990 03:22:33'), 25000.22, true),
      new Userinfo('Chris Nolan ', 22, '67 RainbowLand', '', 'HK', 'Hongkong ', '78323', new Date('09/10/2002 04:20:20'), 15900, false)

    ]
  }

  getUsersData() {
    this.data = new Observable(observer => {
      setTimeout(observer.next(1), 1000);
      setTimeout(observer.next({ data: 'anydata' }), 2000);
      setTimeout(observer.next(2), 300);
    });
    return this.data;
  }
  getUsers(): Observable<Userinfo[]> {
    return of(this.users);
  }
  /*
  //using synchronous without observable
  getUsers() {
    return this.users;
  }
  */
  addUser(user: Userinfo) {
    this.users.push(user);
  }
  deleteUser(user: Userinfo) {
    var idx: number = this.users.indexOf(user);
    this.users.splice(idx, 1);
  }
}
