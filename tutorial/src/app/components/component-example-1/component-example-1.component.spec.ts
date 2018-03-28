import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExample1Component } from './component-example-1.component';

describe('ComponentExample1Component', () => {
  let component: ComponentExample1Component;
  let fixture: ComponentFixture<ComponentExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
