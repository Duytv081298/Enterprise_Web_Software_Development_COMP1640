import { TestBed } from '@angular/core/testing';

import { EtutoringService } from './etutoring.service';

describe('EtutoringService', () => {
  let service: EtutoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtutoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
