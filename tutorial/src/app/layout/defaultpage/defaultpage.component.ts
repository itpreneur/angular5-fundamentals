import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultpage',
  templateUrl: './defaultpage.component.html',
  styleUrls: ['./defaultpage.component.css']
})
export class DefaultpageComponent implements OnInit {
  name: string;
  constructor() {
    this.name = "Hello,World!";
    this.sayHello();

  }
  sayHello() {
    console.log('${this.name}');
    console.log(`${this.name}`);
  }
  ngOnInit() {

  }

}
