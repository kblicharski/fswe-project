import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../../../_models/user';
import { UserService } from '../../../../../../_services/user.service';
import { AuditService } from '../../../../../../_services/audit.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  passwordValue: string;
  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private auditService: AuditService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.userService.getById(userId).subscribe(
        (data) => {
          this.user = data;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onUpdateUser() {
    const oldUser = this.user;
    this.userService.update(this.user).subscribe(
      (data) => {
        const audit = {
          action: `${oldUser.username} was updated`,
          time: new Date(Date.now())
        };
        this.auditService.logAudit(audit).subscribe(
          (data) => {
            this.router.navigate(['..'], {relativeTo: this.route});
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
