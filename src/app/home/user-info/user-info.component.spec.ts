import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent]
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
