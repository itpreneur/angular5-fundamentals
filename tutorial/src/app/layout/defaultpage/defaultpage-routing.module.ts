import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultpageComponent } from './defaultpage.component';

const routes: Routes = [{
  path: '', component: DefaultpageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultpageRoutingModule { }
