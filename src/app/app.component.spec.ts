import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './utility/navbar/navbar.component';
import { FooterComponent } from './utility/footer/footer.component';
import { AlertComponent } from './utility/alert/alert.component';
import { AlertService } from './_services/alert.service';
import {AuthenticationService} from './_services/authentication.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuditService} from './_services/audit.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AlertComponent
      ],
      imports: [RouterTestingModule, RouterTestingModule, HttpClientTestingModule],
      providers: [AlertService, AuthenticationService, AuditService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
