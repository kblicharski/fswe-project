import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministratorComponent } from './home-administrator.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeAdministratorComponent', () => {
  let component: HomeAdministratorComponent;
  let fixture: ComponentFixture<HomeAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdministratorComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
