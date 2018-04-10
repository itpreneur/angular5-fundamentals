import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormBuilder, FormGroup } from '@angular/forms';   //reactive form
import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { FormsDemoComponent } from './forms-demo.component';
import { InjectorDemoComponent } from '../injector-demo/injector-demo.component';
import { AnalyticsComponent } from '../analytics/analytics/analytics.component';
import { AnalyticsService } from '../analytics/analytics.service'
import { Metric, AnalyticsImplementation } from '../analytics/metric';
import { HttpModule, Http } from '@angular/http';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    FormsDemoRoutingModule
  ],
  declarations: [FormsDemoComponent, InjectorDemoComponent, AnalyticsComponent],
  providers: [
    { provide: 'API_URL', useValue: 'http://my.api.com/v1' },
    {
      // `AnalyticsService` is the _token_ we use to inject
      // note, the token is the class, but it's just used as an identifier!
      provide: AnalyticsService,
      // add our `deps` to specify the factory depencies
      deps: [Http, 'API_URL'],
      // useFactory is a function - whatever is returned from this function // will be injected
      useFactory(http: Http, apiUrl: string) {
        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
            console.log('Sending to: ', apiUrl);
          }
        };
        // create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      }
    }
  ]
})
export class FormsDemoModule { }
