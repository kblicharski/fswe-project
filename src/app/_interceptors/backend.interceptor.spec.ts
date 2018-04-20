import { TestBed, inject } from '@angular/core/testing';

import { BackendInterceptor } from './backend.interceptor';

describe('BackendInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendInterceptor]
    });
  });

  it('should be created', inject([BackendInterceptor], (service: BackendInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
