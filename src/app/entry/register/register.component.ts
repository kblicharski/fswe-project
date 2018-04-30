import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../_services/alert.service';
import { UserService } from '../../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuditService } from '../../_services/audit.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {
    address: {},
    demographics: {}
  };
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private auditService: AuditService
  ) {
  }

  register() {
    this.loading = true;
    this.model.dob = new Date(this.model.dob).toISOString();
    this.model.demographics.age = Math.abs(new Date(Date.now() - new Date(this.model.dob).getTime()).getUTCFullYear() - 1970);
    this.userService.create(this.model)
      .subscribe(
        (data) => {
          const audit = {action: `Registered new user: ${this.model.username}.`, time: new Date(Date.now())};
          this.auditService.logAudit(audit);
          this.alertService.success('Registration successful!', true);
          this.router.navigate(['login']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          const errorMessages = error.error.error.details.messages;
          let errorMessage = '';
          console.log(errorMessages);
          for (const key in errorMessages) {
            if (errorMessages.hasOwnProperty(key)) {
              errorMessage += errorMessages[key][0] + ' ';
              console.log(errorMessage);
            }
          }
          this.alertService.error(errorMessage);
          this.loading = false;
        });
  }
}
