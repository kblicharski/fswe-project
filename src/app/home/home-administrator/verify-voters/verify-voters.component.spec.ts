import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVotersComponent } from './verify-voters.component';

describe('VerifyVotersComponent', () => {
  let component: VerifyVotersComponent;
  let fixture: ComponentFixture<VerifyVotersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyVotersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
