import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidateComponent } from './create-candidate.component';
import {FormsModule} from '@angular/forms';
import { ElectionService } from '../../../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateCandidateComponent', () => {
  let component: CreateCandidateComponent;
  let fixture: ComponentFixture<CreateCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCandidateComponent ],
      imports: [FormsModule, HttpClientTestingModule],
            providers: [ElectionService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
