import { inject, TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuditService } from './audit.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService, AuditService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
