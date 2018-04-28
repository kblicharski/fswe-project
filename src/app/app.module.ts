import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { AuthGuard } from './_guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { UserService } from './_services/user.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BallotComponent } from './ballot/ballot.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { UserInfoComponent } from './home/user-info/user-info.component';
import { FilterPipe } from './_pipes/filter-user.pipe';
import { HomeVoterComponent } from './home/home-voter/home-voter.component';
import { HomeManagerComponent } from './home/home-manager/home-manager.component';
import { HomeAdministratorComponent } from './home/home-administrator/home-administrator.component';
import { SpinnerComponent } from './home/spinner/spinner.component';
import { VerifyVotersComponent } from './home/home-administrator/verify-voters/verify-voters.component';
import { ElectionManagementComponent } from './home/home-administrator/election-management/election-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    ForgotPasswordComponent,
    BallotComponent,
    FooterComponent,
    NavbarComponent,
    SettingsComponent,
    UserInfoComponent,
    FilterPipe,
    HomeVoterComponent,
    HomeManagerComponent,
    HomeAdministratorComponent,
    SpinnerComponent,
    VerifyVotersComponent,
    ElectionManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
