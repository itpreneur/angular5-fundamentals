import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Userinfo } from '../../models/userinfo';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  @Input() user: Userinfo;
  @HostBinding('style.background-color') styleClass = 'gray';

  constructor() { }

  ngOnInit() {
  }

}
