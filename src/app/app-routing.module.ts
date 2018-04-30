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
import { CreateElectionComponent } from './home/home-administrator/election-management/create/create-election/create-election.component';
import { EditUserComponent } from './home/home-administrator/election-management/edit/edit-users/edit-user/edit-user.component';
import { DemographicsComponent } from './home/home-administrator/demographics/demographics.component';
import { CreateBallotComponent } from './home/home-administrator/election-management/create/create-ballot/create-ballot.component';
import { CreateCandidateComponent } from './home/home-administrator/election-management/create/create-candidate/create-candidate.component';
import { EditElectionsComponent } from './home/home-administrator/election-management/edit/edit-elections/edit-elections.component';
import { EditBallotsComponent } from './home/home-administrator/election-management/edit/edit-ballots/edit-ballots.component';
import { EditCandidatesComponent } from './home/home-administrator/election-management/edit/edit-candidates/edit-candidates.component';
import { CreateComponent } from './home/home-administrator/election-management/create/create.component';
import { EditComponent } from './home/home-administrator/election-management/edit/edit.component';
import { EditUsersComponent } from './home/home-administrator/election-management/edit/edit-users/edit-users.component';
import { EditElectionComponent } from './home/home-administrator/election-management/edit/edit-elections/edit-election/edit-election.component';
import { EditBallotComponent } from './home/home-administrator/election-management/edit/edit-ballots/edit-ballot/edit-ballot.component';
import { EditCandidateComponent } from './home/home-administrator/election-management/edit/edit-candidates/edit-candidate/edit-candidate.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: '/login'},
      {path: 'voter', component: HomeVoterComponent, canActivate: [VoterGuard]},
      {path: 'manager', component: HomeManagerComponent, canActivate: [ManagerGuard]},
      {
        path: 'administrator', component: HomeAdministratorComponent, canActivate: [AdminGuard],
        children:
          [
            {path: 'verify', component: VerifyVotersComponent},
            {
              path: 'manage', component: ElectionManagementComponent,
              children: [
                {
                  path: 'create', component: CreateComponent, children: [
                    {path: 'election', component: CreateElectionComponent},
                    {path: 'ballot', component: CreateBallotComponent},
                    {path: 'candidate', component: CreateCandidateComponent},
                  ]
                },
                {
                  path: 'edit', component: EditComponent, children: [
                    {path: 'users', component: EditUsersComponent},
                    {path: 'users/:id', component: EditUserComponent},
                    {path: 'elections', component: EditElectionComponent},
                    {path: 'elections/:id', component: EditElectionsComponent},
                    {path: 'ballots', component: EditBallotsComponent},
                    {path: 'ballots/:id', component: EditBallotComponent},
                    {path: 'candidates', component: EditCandidatesComponent},
                    {path: 'candidates/:id', component: EditCandidateComponent}
                  ]
                }

              ]
            },
            {path: 'audit', component: AuditTrailComponent},
            {path: 'demographics', component: DemographicsComponent}
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
