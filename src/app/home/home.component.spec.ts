import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule]
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
      'role': 'administrator',
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

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
