import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { AlertService } from '../../_services/alert.service';

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
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([`${data.role}`]);
        },
        error => {
          if (error.error.error.statusCode === 402) {
            this.alertService.error('Incorrect username or password.');
          } else if (error.error.error.statusCode === 401) {
            this.alertService.error('You have not been verified yet by your administrator.');
          }
          this.loading = false;
        });
  }
}
