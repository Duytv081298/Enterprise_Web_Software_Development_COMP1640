import { TestBed } from '@angular/core/testing';

import { AccountClassificationService } from './account-classification.service';

describe('AccountClassificationService', () => {
  let service: AccountClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
