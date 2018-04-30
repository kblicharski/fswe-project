import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectionComponent } from './create-election.component';
import { ElectionService } from '../../../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('CreateElectionComponent', () => {
  let component: CreateElectionComponent;
  let fixture: ComponentFixture<CreateElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateElectionComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [ElectionService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
