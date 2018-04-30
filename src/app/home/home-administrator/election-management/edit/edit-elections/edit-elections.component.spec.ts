import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionsComponent } from './edit-elections.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from '../../../../../_pipes/filter-user.pipe';
import { ElectionService } from '../../../../../_services/election.service';
import { UserService } from '../../../../../_services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuditService } from '../../../../../_services/audit.service';

describe('EditElectionsComponent', () => {
  let component: EditElectionsComponent;
  let fixture: ComponentFixture<EditElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElectionsComponent, FilterPipe ],
            imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [ElectionService, UserService, AuditService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
