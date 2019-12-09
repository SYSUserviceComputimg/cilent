/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SigninServiceService } from './signin-service.service';

describe('Service: SigninService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninServiceService]
    });
  });

  it('should ...', inject([SigninServiceService], (service: SigninServiceService) => {
    expect(service).toBeTruthy();
  }));
});
