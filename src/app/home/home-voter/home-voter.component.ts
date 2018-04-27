import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home-voter',
  templateUrl: './home-voter.component.html',
  styleUrls: ['./home-voter.component.css']
})
export class HomeVoterComponent implements OnInit {
  currentUser: User;
  private votingStatus: boolean;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
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
