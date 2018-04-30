import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import {UserService} from '../../_services/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {AuditService} from '../../_services/audit.service';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      providers: [UserService, AuditService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    component.type = 'administrator';
    component.user = {
      ssn: '66666',
      firstName: 'Jon',
      lastName: 'Adams',
      dob: new Date('2018-02-25T23:40:27.000Z'),
      driversLicense: 'ja555123',
      registrationStatus: 'registered',
      email: 'jon.Adams@gmail.com',
      address: {street: 'University Avenue', city: 'Iowa City', state: 'IA', zipCode: '52245'},
      role: 'manager',
      votingStatus: 'approved',
      precinctId: 1,
      username: 'jonAdams',
      emailVerified: true,
      id: 4,
      demographics: {
        age: 18,
        race: 'White',
        gender: 'M',
        party: 'Republican'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
