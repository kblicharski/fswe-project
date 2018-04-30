import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBallotComponent } from './create-ballot.component';

describe('CreateBallotComponent', () => {
  let component: CreateBallotComponent;
  let fixture: ComponentFixture<CreateBallotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBallotComponent ]
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
