import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-verify-voters',
  templateUrl: './verify-voters.component.html',
  styleUrls: ['./verify-voters.component.css']
})
export class VerifyVotersComponent implements OnInit {
  unregisteredUsers: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAllUnregistered().subscribe(users => {
      this.unregisteredUsers = users;
    });
  }

  verifyUser(user) {
    user.registrationStatus = 'registered';
    this.userService.update(user).subscribe(
      (data) => {
        this.loadAllUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  denyUser(user) {
    user.registrationStatus = 'denied';
    this.userService.update(user).subscribe(
      (data) => {
        this.loadAllUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
