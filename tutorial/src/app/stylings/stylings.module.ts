import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


import { StylingsRoutingModule } from './stylings-routing.module';
import { Example1Component } from './example-1/example-1.component';
import { CommonComponent } from '../common/common/common.component';
import { Example2Component } from './example-2/example-2.component';
import { Example3Component } from './example-3/example-3.component';
import { DummyparentComponent } from './example-3/dummyparent/dummyparent.component';
import { Example4Component } from './example-4/example-4.component';
import { UserService } from './services/user.service';
import { Example5Component } from './example-5/example-5.component';
import { HttpuserService } from './services/httpuser.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StylingsRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    UserService,
    HttpuserService
  ],
  declarations: [Example1Component, CommonComponent, Example2Component, Example3Component, DummyparentComponent, Example4Component, Example5Component]
})
export class StylingsModule { }
