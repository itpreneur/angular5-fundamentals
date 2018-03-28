import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../models/userinfo';


@Component({
  selector: 'app-example-1',
  templateUrl: './example-1.component.html',
  styleUrls: ['./example-1.component.css']
})
export class Example1Component implements OnInit {
  users: Userinfo[];
  rh_users: Userinfo[] = [];
  addTop: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      new Userinfo('John Andrew', 26, '456 5th St.', '', 'NJ', 'Red Bank', '56789', true),
      new Userinfo('Jane Doe', 25, '99 Nothing Hill', '', 'MX', 'Tijuana ', '56789'),
      new Userinfo('Maria DB', 35, '299 Somewhere There', '', 'PL', 'Earth ', '00000'),
      new Userinfo('Naomi Bell', 37, '459 Nowhere ', '', 'KL', 'Kaola ', '15233', true),
      new Userinfo('Chris Nolan ', 22, '67 RainbowLand', '', 'HK', 'Hongkong ', '78323', true)
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

}
