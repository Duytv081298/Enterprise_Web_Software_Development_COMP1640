import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDetailForAdminComponent } from './class-detail-for-admin.component';

describe('ClassDetailForAdminComponent', () => {
  let component: ClassDetailForAdminComponent;
  let fixture: ComponentFixture<ClassDetailForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDetailForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDetailForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
