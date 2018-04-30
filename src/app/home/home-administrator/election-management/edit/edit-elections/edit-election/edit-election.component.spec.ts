import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionComponent } from './edit-election.component';
import { FormsModule } from '@angular/forms';

describe('EditElectionComponent', () => {
  let component: EditElectionComponent;
  let fixture: ComponentFixture<EditElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElectionComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
