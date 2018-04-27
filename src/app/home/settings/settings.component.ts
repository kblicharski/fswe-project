import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../_services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../_models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  model: { oldPassword: string, newPassword: string } = {oldPassword: '', newPassword: ''};
  loading = false;
  currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onChangePassword() {
    this.loading = true;

    this.userService.changePassword(this.currentUser.id, this.model)
      .subscribe(
        (data) => {
          this.alertService.success('Password change successful!', true);
          this.router.navigate([this.currentUser.role]);
        },
        (error: HttpErrorResponse) => {
          this.alertService.error('Incorrect password.');
          this.loading = false;
        });
  }
}
