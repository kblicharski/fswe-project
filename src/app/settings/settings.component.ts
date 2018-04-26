import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../_services/alert.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  model: { oldPassword: string, newPassword: string } = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
  }

  onChangePassword() {
    this.loading = true;
    const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.changePassword(currentUser.id, this.model)
      .subscribe(
        (data) => {
          this.alertService.success('Password change successful!', true);
          this.router.navigate(['']);
        },
        (error: HttpErrorResponse) => {
          this.alertService.error('Incorrect password.');
          this.loading = false;
        });
  }
}
