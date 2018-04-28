import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  model: any = {};
  formSubmitted = false;

  resetPassword(username: String) {
    // this.emailService.resetPassword(this.model.username)
    // TODO: Create an emailService which takes a username as input,
    // extracts the email associated with that username, and sends them an email.
    // This email should have a link to reset the user's password.
    // They then click this dynamically generated link, enter their new password, and it
    // edits their entry in the DB. These should be secure, random links.
    /*const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'voterreg.fswe@gmail.com',
        pass: 'hawkeyes78'
      }
    });

    const mailOptions = {
      from: 'voterreg.fswe@gmail.com',
      to: 'QUERY EMAIL HERE',
      subject: 'Voter Registration Status',
      text: 'Click <a href="http://www.yahoo.com">here</a> to reset your password.'
    };*/
    this.formSubmitted = true;
  }

}
