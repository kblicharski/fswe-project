import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {
  @Input() currentUser: User;
  requestingUsers: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAllRequesting().subscribe(users => {
      this.requestingUsers = users;
    });
  }

  approveVoteRequest(user: User) {
    user.votingStatus = 'approved';
    this.userService.update(user).subscribe(
      (data) => {
        this.loadAllUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  denyVoteRequest(user: User) {
    user.votingStatus = 'denied';
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
