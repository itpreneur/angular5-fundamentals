import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyparentComponent } from './dummyparent.component';

describe('DummyparentComponent', () => {
  let component: DummyparentComponent;
  let fixture: ComponentFixture<DummyparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
