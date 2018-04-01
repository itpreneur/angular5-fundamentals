import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Userinfo } from '../../../models/userinfo';
import { Example3Component } from '../../example-3/example-3.component';

@Component({
  selector: 'app-dummyparent',
  templateUrl: './dummyparent.component.html',
  styleUrls: ['./dummyparent.component.css']
})
export class DummyparentComponent implements OnInit {
  msg: Userinfo;
  message: string;
  @ViewChild(Example3Component) child: Example3Component;
  @ViewChild('parentviewchild') someinput: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.message = "";
  }
  ngAfterViewInit() {

    this.message = this.child.msgtoParent;
    this.cdr.detectChanges();  //need this to detect change and to suppress errors for change detection
  }
  listentoChild(event) {
    //console.log('From Parent listentochild', event)
    this.msg = event;
    console.log('someinput', this.someinput)
    //this.message = this.someinput.nativeElement.value;
  }

}
