import { TestBed } from '@angular/core/testing';

import { TransportationService } from './transportation.service';

describe('TransportationService', () => {
  let service: TransportationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
