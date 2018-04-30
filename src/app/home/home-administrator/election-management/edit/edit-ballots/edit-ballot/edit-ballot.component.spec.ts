import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBallotComponent } from './edit-ballot.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ElectionService } from '../../../../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuditService } from '../../../../../../_services/audit.service';

describe('EditBallotComponent', () => {
  let component: EditBallotComponent;
  let fixture: ComponentFixture<EditBallotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditBallotComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [ElectionService, AuditService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
