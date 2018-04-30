import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionsComponent } from './edit-elections.component';

describe('EditElectionsComponent', () => {
  let component: EditElectionsComponent;
  let fixture: ComponentFixture<EditElectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElectionsComponent ]
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
