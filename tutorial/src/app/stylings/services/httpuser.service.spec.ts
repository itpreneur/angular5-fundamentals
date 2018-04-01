import { TestBed, inject } from '@angular/core/testing';

import { HttpuserService } from './httpuser.service';

describe('HttpuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpuserService]
    });
  });

  it('should be created', inject([HttpuserService], (service: HttpuserService) => {
    expect(service).toBeTruthy();
  }));
});
