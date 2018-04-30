import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersComponent } from './edit-users.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../../../_pipes/filter-user.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { ElectionService } from '../../../../../_services/election.service';
import { UserService } from '../../../../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditUsersComponent', () => {
  let component: EditUsersComponent;
  let fixture: ComponentFixture<EditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditUsersComponent, FilterPipe],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [ElectionService, UserService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
