import { TestBed } from '@angular/core/testing';

import { SignupSeriveService } from './signup-serive.service';

describe('SignupSeriveService', () => {
  let service: SignupSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
