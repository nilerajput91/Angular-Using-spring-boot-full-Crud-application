import { TestBed } from '@angular/core/testing';

import { UserRegistarionService } from './user-registarion.service';

describe('UserRegistarionService', () => {
  let service: UserRegistarionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistarionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
