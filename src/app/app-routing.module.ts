import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SettingsComponent } from './home/settings/settings.component';
import { HomeVoterComponent } from './home/home-voter/home-voter.component';
import { HomeManagerComponent } from './home/home-manager/home-manager.component';
import { HomeAdministratorComponent } from './home/home-administrator/home-administrator.component';
import { AdminGuard } from './_guards/admin.guard';
import { ManagerGuard } from './_guards/manager.guard';
import { ElectionManagementComponent } from './home/home-administrator/election-management/election-management.component';
import { VerifyVotersComponent } from './home/home-administrator/verify-voters/verify-voters.component';
import { VoterGuard } from './_guards/voter.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: 'voter', component: HomeVoterComponent, canActivate: [VoterGuard]},
      {path: 'manager', component: HomeManagerComponent, canActivate: [ManagerGuard]},
      {
        path: 'administrator', component: HomeAdministratorComponent, canActivate: [AdminGuard],
        children:
          [
            {path: 'manage', component: ElectionManagementComponent},
            {path: 'verify', component: VerifyVotersComponent},
          ]
      },

    ],
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
