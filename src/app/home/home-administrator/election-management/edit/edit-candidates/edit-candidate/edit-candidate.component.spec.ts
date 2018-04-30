import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidateComponent } from './edit-candidate.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ElectionService } from '../../../../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuditService } from '../../../../../../_services/audit.service';

describe('EditCandidateComponent', () => {
  let component: EditCandidateComponent;
  let fixture: ComponentFixture<EditCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCandidateComponent ],
            imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [ElectionService, AuditService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
