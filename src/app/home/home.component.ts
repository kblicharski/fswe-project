import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  private votingStatus: boolean;
  private userStatus: 'voter' | 'manager' | 'administrator';
  queryString: string;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userStatus = this.currentUser.role;
    // this.userStatus = 'manager';
    // this.userStatus = 'administrator';
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  onSubmitVoteRequest() {
    this.votingStatus = true;
  }

  ongoingCurrentElection() {
    return true;
  }

  userCanVote() {
    return this.votingStatus;
  }
}

