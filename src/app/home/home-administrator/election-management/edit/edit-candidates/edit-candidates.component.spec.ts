import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidatesComponent } from './edit-candidates.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from '../../../../../_pipes/filter-user.pipe';
import { ElectionService } from '../../../../../_services/election.service';
import { UserService } from '../../../../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditCandidatesComponent', () => {
  let component: EditCandidatesComponent;
  let fixture: ComponentFixture<EditCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCandidatesComponent, FilterPipe ],
            imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [ElectionService, UserService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
