import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsComponent } from './demographics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

describe('DemographicsComponent', () => {
  let component: DemographicsComponent;
  let fixture: ComponentFixture<DemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicsComponent ],
      imports: [NgxChartsModule]
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
