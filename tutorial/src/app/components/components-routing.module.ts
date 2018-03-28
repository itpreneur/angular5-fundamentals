import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentExample1Component } from './component-example-1/component-example-1.component'
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';

const routes: Routes = [
  { path: '', component: ComponentExample1Component },
  { path: 'example2', component: Example2Component },
  { path: 'example3', component: Example3Component },
  { path: 'example4', component: Example4Component },
  { path: 'example5', component: Example5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
