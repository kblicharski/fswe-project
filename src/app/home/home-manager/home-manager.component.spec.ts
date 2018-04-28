import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManagerComponent } from './home-manager.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../_pipes/filter-user.pipe';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserService } from '../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeManagerComponent', () => {
  let component: HomeManagerComponent;
  let fixture: ComponentFixture<HomeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeManagerComponent, FilterPipe, UserInfoComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
