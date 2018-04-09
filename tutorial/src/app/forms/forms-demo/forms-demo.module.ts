import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormBuilder, FormGroup } from '@angular/forms';   //reactive form
import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { FormsDemoComponent } from './forms-demo.component'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,

    CommonModule,
    FormsDemoRoutingModule
  ],
  declarations: [FormsDemoComponent]
})
export class FormsDemoModule { }
