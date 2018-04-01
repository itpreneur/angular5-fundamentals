import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example-1/example-1.component';
import { Example2Component } from './example-2/example-2.component';
import { Example3Component } from './example-3/example-3.component';
import { DummyparentComponent } from './example-3/dummyparent/dummyparent.component';
import { Example4Component } from './example-4/example-4.component';
import { Example5Component } from './example-5/example-5.component';

const routes: Routes = [
  { path: '', component: Example1Component },
  { path: 'pipes', component: Example2Component },
  { path: 'events', component: DummyparentComponent },
  { path: 'services', component: Example4Component },
  { path: 'httpclient', component: Example5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylingsRoutingModule { }
