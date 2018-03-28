import { Component, OnInit, ViewChild } from '@angular/core';
import { Userinfo } from '../../models/userinfo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component implements OnInit {
  users: Userinfo[];
  rh_users: Userinfo[] = [];
  addTop: boolean = false;

  constructor() {

  }

  ngOnInit() {
    this.users = [
      new Userinfo('John Andrew', 26, '456 5th St.', '', 'NJ', 'Red Bank', '56789'),
      new Userinfo('Jane Doe', 25, '99 Nothing Hill', '', 'MX', 'Tijuana ', '56789'),
      new Userinfo('Maria DB', 35, '299 Somewhere There', '', 'PL', 'Earth ', '00000'),
      new Userinfo('Naomi Bell', 37, '459 Nowhere ', '', 'KL', 'Kaola ', '15233'),
      new Userinfo('Chris Nolan ', 22, '67 RainbowLand', '', 'HK', 'Hongkong ', '78323')
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

  onSubmit(form: NgForm) {
    //console.log('formvalid', form.valid, form)
    if (form.valid) {
      //console.log(form.value.name, form.value.age);
      let _user = new Userinfo(form.value.name, Number(form.value.age), form.value.addr1, form.value.addr2,
        form.value.state, form.value.city, form.value.zip);
      this.users.push(_user);
      form.resetForm(); //only valid with formgroup

    }
  }
}
