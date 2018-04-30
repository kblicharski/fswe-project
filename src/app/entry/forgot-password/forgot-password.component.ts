import { Component } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';

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
    private alertService: AlertService
  ) {
  }

  resetPassword() {
    // this.emailService.resetPassword(this.model.username)
    // TODO: Create an emailService which takes a username as input,
    // extracts the email associated with that username, and sends them an email.
    // This email should have a link to reset the user's password.
    // They then click this dynamically generated link, enter their new password, and it
    // edits their entry in the DB. These should be secure, random links.

    // api/users/{id}/resetPassword
    this.loading = true;
    setTimeout(
      () => {
        this.loading = false;
        this.alertService.success('We have sent an email to the address associated with that username.', true);
        this.router.navigate(['/login']);
      }, 500
    );
  }

}
