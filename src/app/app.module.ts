import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './entry/register/register.component';
import { LoginComponent } from './entry/login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { AuthGuard } from './_guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './utility/alert/alert.component';
import { UserService } from './_services/user.service';
import { ForgotPasswordComponent } from './entry/forgot-password/forgot-password.component';
import { OfficeComponent } from './home/home-voter/office/office.component';
import { FooterComponent } from './utility/footer/footer.component';
import { NavbarComponent } from './utility/navbar/navbar.component';
import { SettingsComponent } from './home/settings/settings.component';
import { UserInfoComponent } from './home/user-info/user-info.component';
import { FilterPipe } from './_pipes/filter-user.pipe';
import { HomeVoterComponent } from './home/home-voter/home-voter.component';
import { HomeManagerComponent } from './home/home-manager/home-manager.component';
import { HomeAdministratorComponent } from './home/home-administrator/home-administrator.component';
import { SpinnerComponent } from './utility/spinner/spinner.component';
import { VerifyVotersComponent } from './home/home-administrator/verify-voters/verify-voters.component';
import { ElectionManagementComponent } from './home/home-administrator/election-management/election-management.component';
import { VoterGuard } from './_guards/voter.guard';
import { ManagerGuard } from './_guards/manager.guard';
import { AdminGuard } from './_guards/admin.guard';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AuditTrailComponent } from './home/home-administrator/audit-trail/audit-trail.component';
import { ElectionService } from './_services/election.service';
import { MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuditService } from './_services/audit.service';
import { CreateElectionComponent } from './home/home-administrator/election-management/create-election/create-election.component';
import { EditUsersComponent } from './home/home-administrator/election-management/edit-users/edit-users.component';
import { EditUserComponent } from './home/home-administrator/election-management/edit-users/edit-user/edit-user.component';
import { PairsPipe } from './_pipes/pairs.pipe';
import { DemographicsComponent } from './home/home-administrator/demographics/demographics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    ForgotPasswordComponent,
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
    PageNotFoundComponent,
    AuditTrailComponent,
    OfficeComponent,
    CreateElectionComponent,
    EditUsersComponent,
    EditUserComponent,
    PairsPipe,
    DemographicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    AuthGuard,
    VoterGuard,
    ManagerGuard,
    AdminGuard,
    AlertService,
    AuthenticationService,
    UserService,
    ElectionService,
    AuditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
