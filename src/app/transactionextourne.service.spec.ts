import { TestBed } from '@angular/core/testing';

import { TransactionextourneService } from './transactionextourne.service';

describe('TransactionextourneService', () => {
  let service: TransactionextourneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionextourneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
