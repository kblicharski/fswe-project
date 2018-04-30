import { Component, OnInit } from '@angular/core';
import { User } from '../../../../_models/user';
import { UserService } from '../../../../_services/user.service';
import { AuditService } from '../../../../_services/audit.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  users: User[] = [];
  private loading = false;

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshUsers() {
    // Add delay to allow refresh icon to appear
    this.loading = true;
    setTimeout(() => {
      this.getAllUsers();
    }, 600);
  }

}
