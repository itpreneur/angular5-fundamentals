import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo.component';
import { InjectorDemoComponent } from '../injector-demo/injector-demo.component';
import { AnalyticsComponent } from '../analytics/analytics/analytics.component'

const routes: Routes = [
  { path: '', component: FormsDemoComponent },
  { path: 'injector', component: InjectorDemoComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class FormsDemoRoutingModule { }
