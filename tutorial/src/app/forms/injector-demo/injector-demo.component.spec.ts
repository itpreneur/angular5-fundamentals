import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectorDemoComponent } from './injector-demo.component';

describe('InjectorDemoComponent', () => {
  let component: InjectorDemoComponent;
  let fixture: ComponentFixture<InjectorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
