import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StylingsRoutingModule } from './stylings-routing.module';
import { Example1Component } from './example-1/example-1.component';
import { CommonComponent } from '../common/common/common.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StylingsRoutingModule
  ],
  declarations: [Example1Component, CommonComponent]
})
export class StylingsModule { }
