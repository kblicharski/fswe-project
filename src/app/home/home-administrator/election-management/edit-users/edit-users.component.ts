import { Component, OnInit } from '@angular/core';
import { User } from '../../../../_models/user';
import { UserService } from '../../../../_services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
