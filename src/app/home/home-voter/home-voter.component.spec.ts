import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVoterComponent } from './home-voter.component';
import { SpinnerComponent } from '../../utility/spinner/spinner.component';

describe('HomeVoterComponent', () => {
  let component: HomeVoterComponent;
  let fixture: ComponentFixture<HomeVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVoterComponent, SpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
