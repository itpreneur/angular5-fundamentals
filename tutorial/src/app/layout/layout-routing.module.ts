import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FormsDemoModule } from '../forms/forms-demo/forms-demo.module';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'defaultpage' },
    { path: 'defaultpage', loadChildren: './defaultpage/defaultpage.module#DefaultpageModule' },
    { path: 'components', loadChildren: '../components/components.module#ComponentsModule' },
    { path: 'stylings', loadChildren: '../stylings/stylings.module#StylingsModule' },
    { path: 'todos', loadChildren: '../todo/todo.module#TodoModule' },
    { path: 'forms', loadChildren: '../forms/forms-demo/forms-demo.module#FormsDemoModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
