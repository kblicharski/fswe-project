import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBallotComponent } from './create-ballot.component';
import { FormsModule } from '@angular/forms';
import { ElectionService } from '../../../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuditService } from '../../../../../_services/audit.service';

describe('CreateBallotComponent', () => {
  let component: CreateBallotComponent;
  let fixture: ComponentFixture<CreateBallotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBallotComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ElectionService, AuditService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
