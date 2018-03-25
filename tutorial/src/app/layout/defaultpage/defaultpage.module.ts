import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultpageRoutingModule } from './defaultpage-routing.module';
import { DefaultpageComponent } from './defaultpage.component';

@NgModule({
  imports: [
    CommonModule,
    DefaultpageRoutingModule
  ],
  declarations: [DefaultpageComponent]
})
export class DefaultpageModule { }
