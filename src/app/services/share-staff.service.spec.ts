import { TestBed } from '@angular/core/testing';

import { ShareStaffService } from './share-staff.service';

describe('ShareStaffService', () => {
  let service: ShareStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
