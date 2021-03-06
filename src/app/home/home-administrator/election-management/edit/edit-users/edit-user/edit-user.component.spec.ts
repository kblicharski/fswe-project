import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ElectionService } from '../../../../../../_services/election.service';
import { UserService } from '../../../../../../_services/user.service';
import { AuditService } from '../../../../../../_services/audit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserInfoComponent } from '../../../../../user-info/user-info.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserComponent, UserInfoComponent],
            imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [ElectionService, UserService, AuditService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
