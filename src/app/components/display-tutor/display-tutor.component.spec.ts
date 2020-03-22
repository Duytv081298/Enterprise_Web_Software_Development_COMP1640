import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTutorComponent } from './display-tutor.component';

describe('DisplayTutorComponent', () => {
  let component: DisplayTutorComponent;
  let fixture: ComponentFixture<DisplayTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
