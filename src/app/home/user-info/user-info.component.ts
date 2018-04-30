import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
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
        console.log(data);
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
