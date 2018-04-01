import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../models/userinfo';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-example-4',
  templateUrl: './example-4.component.html',
  styleUrls: ['./example-4.component.css']
})
export class Example4Component implements OnInit {
  users: Userinfo[];
  data: any;
  rh_users: Userinfo[] = [];
  pick_user: Userinfo = null;
  msgtoParent: string = "Yo what the heck are you doing!";
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe(x => {
      this.users = x;
    });
    this.userService.getUsersData().subscribe(x => {
      console.log('data', x);
    });
  }
  delete(user: Userinfo) {
    //console.log('delete', user, );
    this.userService.deleteUser(user);
    this.rh_users.push(user);
  }
  add(user: Userinfo) {
    //console.log('add', user)
    var idx: number = this.rh_users.indexOf(user);
    //console.log('idx', idx)
    this.rh_users.splice(idx, 1);

    this.userService.addUser(user);
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


}
