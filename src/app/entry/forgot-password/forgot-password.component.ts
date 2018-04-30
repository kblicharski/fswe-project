import { Component } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
  ) {
  }

  resetPassword() {
    this.loading = true;
    this.userService.getIdByUsername(this.model.username).subscribe(
      (users) => {
        let id;
        if (users) {
          id = users[0].id;
        } else {
          id = -1;
        }
        this.userService.resetPassword(id).subscribe(
          (data) => {
            this.loading = false;
            this.alertService.success('We have sent an email to the address associated with that username.', true);
            this.router.navigate(['/login']);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
