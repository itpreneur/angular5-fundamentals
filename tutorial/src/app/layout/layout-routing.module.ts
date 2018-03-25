import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

/*

,
  children: [
    { path: '', redirectTo: 'defaultpage' },
    { path: 'defaultpage', loadChildren: './defaultpage/defaultpage.module#DefaultpageModule' }
  ]
    */
const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'defaultpage' },
    { path: 'defaultpage', loadChildren: './defaultpage/defaultpage.module#DefaultpageModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
