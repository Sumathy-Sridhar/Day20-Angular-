import { TestBed } from '@angular/core/testing';

import { ForExService } from './for-ex.service';

describe('ForExService', () => {
  let service: ForExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
