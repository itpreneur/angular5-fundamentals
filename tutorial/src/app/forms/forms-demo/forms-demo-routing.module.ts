import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo.component';

const routes: Routes = [
  { path: '', component: FormsDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class FormsDemoRoutingModule { }
