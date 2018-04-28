import { inject, TestBed } from '@angular/core/testing';

import { VoterGuard } from './voter.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('VoterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoterGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([VoterGuard], (guard: VoterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
