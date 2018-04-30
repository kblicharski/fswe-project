import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBallotsComponent } from './edit-ballots.component';

describe('EditBallotsComponent', () => {
  let component: EditBallotsComponent;
  let fixture: ComponentFixture<EditBallotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBallotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBallotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
