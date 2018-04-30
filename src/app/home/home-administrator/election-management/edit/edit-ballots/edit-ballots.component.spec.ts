import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBallotsComponent } from './edit-ballots.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from '../../../../../_pipes/filter-user.pipe';
import { ElectionService } from '../../../../../_services/election.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuditService } from '../../../../../_services/audit.service';

describe('EditBallotsComponent', () => {
  let component: EditBallotsComponent;
  let fixture: ComponentFixture<EditBallotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditBallotsComponent, FilterPipe],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [ElectionService, AuditService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBallotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
