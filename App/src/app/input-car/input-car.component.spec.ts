import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCarComponent } from './input-car.component';

describe('InputCarComponent', () => {
  let component: InputCarComponent;
  let fixture: ComponentFixture<InputCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
