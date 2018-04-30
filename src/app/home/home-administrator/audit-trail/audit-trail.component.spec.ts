import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTrailComponent } from './audit-trail.component';
import { ElectionService } from '../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuditTrailComponent', () => {
  let component: AuditTrailComponent;
  let fixture: ComponentFixture<AuditTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuditTrailComponent],
      imports: [HttpClientTestingModule],
      providers: [ElectionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
