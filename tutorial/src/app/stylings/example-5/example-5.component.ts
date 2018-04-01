import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/usertest';

import { HttpuserService } from '../services/httpuser.service';

@Component({
  selector: 'app-example-5',
  templateUrl: './example-5.component.html',
  styleUrls: ['./example-5.component.css']
})
export class Example5Component implements OnInit {
  users: UserI[];
  constructor(private userService: HttpuserService) { }

  ngOnInit() {
    this.userService.saveUser({
      "name": "morpheus",
      "first_name": "Avatar",
      "job": "leader"
    });
    this.userService.getUsers().subscribe(x => {
      // console.log('resp', x)
      this.users = x;
    });
  }

}
