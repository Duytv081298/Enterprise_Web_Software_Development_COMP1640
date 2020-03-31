import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTutorComponent } from './update-tutor.component';

describe('UpdateTutorComponent', () => {
  let component: UpdateTutorComponent;
  let fixture: ComponentFixture<UpdateTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
