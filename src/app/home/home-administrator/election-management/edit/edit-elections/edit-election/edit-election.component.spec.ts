import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionComponent } from './edit-election.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ElectionService } from '../../../../../../_services/election.service';
import { UserService } from '../../../../../../_services/user.service';
import { AuditService } from '../../../../../../_services/audit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditElectionComponent', () => {
  let component: EditElectionComponent;
  let fixture: ComponentFixture<EditElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditElectionComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ElectionService, UserService, AuditService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
