import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../models/userinfo';

@Component({
  selector: 'app-component-example-1',
  templateUrl: './component-example-1.component.html',
  styleUrls: ['./component-example-1.component.css']
})
export class ComponentExample1Component implements OnInit {
  user: Userinfo;
  myTuple = [1, 'myname', true];
  constructor() {
    this.user = new Userinfo('Bill Gates', 30, 'One Way Street', '', 'Seattle', 'Washington', '12345');

  }

  ngOnInit() {
  }

}
