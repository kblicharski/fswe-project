import { inject, TestBed } from '@angular/core/testing';

import { ManagerGuard } from './manager.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManagerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([ManagerGuard], (guard: ManagerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
