import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditService } from '../../_services/audit.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Input() type: 'administrator' | 'manager';
  @Output() onAllow: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeny: EventEmitter<any> = new EventEmitter<any>();
  @Output() edited: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private auditService: AuditService
  ) {
  }

  ngOnInit() {
  }

  onDenyUser() {
    this.onDeny.emit();
  }

  onAllowUser() {
    this.onAllow.emit();
  }

  onDeleteUser() {
    this.userService.delete(this.user.id).subscribe(
      (data) => {
        const audit = {
          action: `${this.user.username} was deleted`,
          time: new Date(Date.now())
        };
        this.auditService.logAudit(audit);
        this.edited.emit();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEditUser() {
    this.router.navigate([`${this.user.id}`], {relativeTo: this.route});
  }

}
