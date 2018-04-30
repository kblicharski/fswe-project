import { TestBed, inject } from '@angular/core/testing';

import { AuditService } from './audit.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([AuditService], (service: AuditService) => {
    expect(service).toBeTruthy();
  }));
});
