import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoresMiercolesComponent } from './operadores-miercoles.component';

describe('OperadoresMiercolesComponent', () => {
  let component: OperadoresMiercolesComponent;
  let fixture: ComponentFixture<OperadoresMiercolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadoresMiercolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperadoresMiercolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
