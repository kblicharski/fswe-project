import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeComponent } from './office.component';
import { ElectionService } from '../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OfficeComponent', () => {
  let component: OfficeComponent;
  let fixture: ComponentFixture<OfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeComponent],
      imports: [HttpClientTestingModule],
      providers: [ElectionService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeComponent);
    component = fixture.componentInstance;
    component.officeId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
