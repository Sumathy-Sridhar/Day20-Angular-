import { TestBed } from '@angular/core/testing';

import { CheckFradulentService } from './check-fradulent.service';

describe('CheckFradulentService', () => {
  let service: CheckFradulentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckFradulentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
