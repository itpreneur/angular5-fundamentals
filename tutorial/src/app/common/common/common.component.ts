import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Userinfo } from '../../models/userinfo';



@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  @Input() user: Userinfo;
  @HostBinding('style.background-color') styleClass = 'gray';

  constructor() { }

  ngOnInit() {
  }

}
