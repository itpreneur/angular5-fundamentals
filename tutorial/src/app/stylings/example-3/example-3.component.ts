import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Userinfo } from '../../models/userinfo';

@Component({
  selector: 'app-example-3',
  templateUrl: './example-3.component.html',
  styleUrls: ['./example-3.component.css']
})
export class Example3Component implements OnInit {
  @Output() toParent = new EventEmitter<Userinfo>();
  users: Userinfo[];
  rh_users: Userinfo[] = [];
  addTop: boolean = false;
  pick_user: Userinfo = null;
  msgtoParent: string = "Yo what the heck are you doing!";
  elem: ElementRef;

  constructor(elem: ElementRef) {
    console.log('element', elem)
    //this.elem=elem;
  }

  ngOnInit() {

    this.users = [
      new Userinfo('John Andrew', 26, '456 5th St.', '', 'NJ', 'Red Bank', '56789', new Date('02/03/1998 08:30'), 15000, true),
      new Userinfo('Jane Doe', 25, '99 Nothing Hill', '', 'MX', 'Tijuana ', '56789', new Date('12/23/2012 12:35:22'), 13000, false),
      new Userinfo('Maria DB', 35, '299 Somewhere There', '', 'PL', 'Earth ', '00000', new Date('10/13/2015 14:32:33'), 12500.82, true),
      new Userinfo('Naomi Bell', 37, '459 Nowhere ', '', 'KL', 'Kaola ', '15233', new Date('04/12/1990 03:22:33'), 25000.22, true),
      new Userinfo('Chris Nolan ', 22, '67 RainbowLand', '', 'HK', 'Hongkong ', '78323', new Date('09/10/2002 04:20:20'), 15900, false)

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
  onDrag(event, user) {
    // event.preventDefault();
    // event.stopPropagation();

    if (this.pick_user == null) {
      //console.log('event dragover', user);
      this.pick_user = user;
    }
    return false;
  }
  onDrop(event: any, user) {

    event.preventDefault();
    event.stopPropagation();
    var o_index = this.users.indexOf(this.pick_user);
    var n_index = this.users.indexOf(user);
    //console.log('swapping index', o_index, n_index);
    this.users[n_index] = this.pick_user;
    this.users[o_index] = user;
    //console.log('drop', user, this.pick_user);
    this.pick_user = null;
    // your code goes here after droping files or any
  }
  onDragLeave(evt, user) {
    evt.preventDefault();
    evt.stopPropagation();
    //console.log('dragleave', user)
  }
  senddata(user) {
    // console.log('senddata', user);
    this.toParent.emit(user);
  }
}
