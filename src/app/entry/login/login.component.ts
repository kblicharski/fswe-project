import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { AlertService } from '../../_services/alert.service';
import { AuditService } from '../../_services/audit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private auditService: AuditService
  ) {
  }

  ngOnInit() {
    // reset login registrationStatus
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          const audit = {action: `Logged in user ${this.model.username}`, time: new Date(Date.now())};
          this.auditService.logAudit(audit);
          this.router.navigate([`${data.role}`]);
        },
        error => {
          if (error.error.error.statusCode === 402) {
            this.alertService.error('Incorrect username or password.');
            const audit = {
              action: `Failed to log in user ${this.model.username} due to: incorrect username or password.`,
              time: new Date(Date.now())
            };
            this.auditService.logAudit(audit);
          } else if (error.error.error.statusCode === 401) {
            this.alertService.error('You have not been verified yet by your administrator.');
            const audit = {
              action: `Failed to log in user ${this.model.username} due to: unverified.`,
              time: new Date(Date.now())
            };
            this.auditService.logAudit(audit);
          }
          this.loading = false;
        });
  }
}
