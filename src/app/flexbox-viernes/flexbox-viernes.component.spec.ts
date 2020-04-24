import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxViernesComponent } from './flexbox-viernes.component';

describe('FlexboxViernesComponent', () => {
  let component: FlexboxViernesComponent;
  let fixture: ComponentFixture<FlexboxViernesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxViernesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxViernesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
