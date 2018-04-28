import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './entry/register/register.component';
import { LoginComponent } from './entry/login/login.component';
import { ForgotPasswordComponent } from './entry/forgot-password/forgot-password.component';
import { SettingsComponent } from './home/settings/settings.component';
import { HomeVoterComponent } from './home/home-voter/home-voter.component';
import { HomeManagerComponent } from './home/home-manager/home-manager.component';
import { HomeAdministratorComponent } from './home/home-administrator/home-administrator.component';
import { AdminGuard } from './_guards/admin.guard';
import { ManagerGuard } from './_guards/manager.guard';
import { ElectionManagementComponent } from './home/home-administrator/election-management/election-management.component';
import { VerifyVotersComponent } from './home/home-administrator/verify-voters/verify-voters.component';
import { VoterGuard } from './_guards/voter.guard';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AuditTrailComponent } from './home/home-administrator/audit-trail/audit-trail.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/404'},
      {path: 'voter', component: HomeVoterComponent, canActivate: [VoterGuard]},
      {path: 'manager', component: HomeManagerComponent, canActivate: [ManagerGuard]},
      {
        path: 'administrator', component: HomeAdministratorComponent, canActivate: [AdminGuard],
        children:
          [
            {path: 'verify', component: VerifyVotersComponent},
            {path: 'manage', component: ElectionManagementComponent},
            {path: 'audit', component: AuditTrailComponent},
          ]
      },
      {path: 'settings', component: SettingsComponent}
    ],
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
