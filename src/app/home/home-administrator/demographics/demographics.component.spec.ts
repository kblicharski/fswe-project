import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsComponent } from './demographics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserService } from '../../../_services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DemographicsComponent', () => {
  let component: DemographicsComponent;
  let fixture: ComponentFixture<DemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemographicsComponent],
      imports: [NgxChartsModule, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
