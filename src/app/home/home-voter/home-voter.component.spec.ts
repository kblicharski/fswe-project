import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVoterComponent } from './home-voter.component';
import { SpinnerComponent } from '../../utility/spinner/spinner.component';
import { ElectionService } from '../../_services/election.service';
import { UserService } from '../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OfficeComponent } from './office/office.component';

describe('HomeVoterComponent', () => {
  let component: HomeVoterComponent;
  let fixture: ComponentFixture<HomeVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVoterComponent, SpinnerComponent, OfficeComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService, ElectionService]
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
      'role': 'voter',
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

    fixture = TestBed.createComponent(HomeVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
