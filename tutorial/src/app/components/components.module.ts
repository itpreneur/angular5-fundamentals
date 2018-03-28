import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentExample1Component } from './component-example-1/component-example-1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentsRoutingModule
  ],
  declarations: [ComponentExample1Component, Example2Component, Example3Component, Example4Component, Example5Component]
})
export class ComponentsModule { }
