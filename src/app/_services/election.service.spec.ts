import { inject, TestBed } from '@angular/core/testing';

import { ElectionService } from './election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ElectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectionService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ElectionService], (service: ElectionService) => {
    expect(service).toBeTruthy();
  }));
});
