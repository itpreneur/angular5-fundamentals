import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'defaultpage' },
    { path: 'defaultpage', loadChildren: './defaultpage/defaultpage.module#DefaultpageModule' },
    { path: 'components', loadChildren: '../components/components.module#ComponentsModule' },
    { path: 'stylings', loadChildren: '../stylings/stylings.module#StylingsModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
