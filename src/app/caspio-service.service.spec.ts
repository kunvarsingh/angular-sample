import { TestBed, inject } from '@angular/core/testing';

import { CaspioServiceService } from './caspio-service.service';

describe('CaspioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaspioServiceService]
    });
  });

  it('should be created', inject([CaspioServiceService], (service: CaspioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
