import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationStudentComponent } from './information-student.component';

describe('InformationStudentComponent', () => {
  let component: InformationStudentComponent;
  let fixture: ComponentFixture<InformationStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
