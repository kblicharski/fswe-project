import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagerComponent } from './home-manager.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../_pipes/filter-user.pipe';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserService } from '../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeManagerComponent', () => {
  let component: HomeManagerComponent;
  let fixture: ComponentFixture<HomeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeManagerComponent, FilterPipe, UserInfoComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const store = JSON.stringify({
      'ssn': '66666',
      'firstName': 'Jon',
      'lastName': 'Adams',
      'dob': '2018-02-25T23:40:27.000Z',
      'driversLicense': 'ja555123',
      'registrationStatus': 'registered',
      'email': 'jon.Adams@gmail.com',
      'address': {'street': 'University Avenue', 'city': 'Iowa City', 'state': 'IA', 'zipCode': '52245'},
      'role': 'manager',
      'votingStatus': 'approved',
      'precinctId': 1,
      'realm': null,
      'username': 'jonAdams',
      'emailVerified': true,
      'id': 4
    });
    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store;
    });

    fixture = TestBed.createComponent(HomeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
