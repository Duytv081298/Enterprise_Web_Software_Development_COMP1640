import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMajorComponent } from './update-major.component';

describe('UpdateMajorComponent', () => {
  let component: UpdateMajorComponent;
  let fixture: ComponentFixture<UpdateMajorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMajorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
