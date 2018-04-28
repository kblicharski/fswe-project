import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVotersComponent } from './verify-voters.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../_pipes/filter-user.pipe';
import { UserInfoComponent } from '../../user-info/user-info.component';
import { UserService } from '../../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerifyVotersComponent', () => {
  let component: VerifyVotersComponent;
  let fixture: ComponentFixture<VerifyVotersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyVotersComponent, FilterPipe, UserInfoComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [UserService]
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
