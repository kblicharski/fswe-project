import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionManagementComponent } from './election-management.component';
import { FormsModule } from '@angular/forms';

describe('ElectionManagementComponent', () => {
  let component: ElectionManagementComponent;
  let fixture: ComponentFixture<ElectionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElectionManagementComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
