import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChancePasswordComponent } from './chance-password.component';

describe('ChancePasswordComponent', () => {
  let component: ChancePasswordComponent;
  let fixture: ComponentFixture<ChancePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChancePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChancePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
