import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home-voter',
  templateUrl: './home-voter.component.html',
  styleUrls: ['./home-voter.component.css']
})
export class HomeVoterComponent implements OnInit {
  @Input() currentUser: User;
  private votingStatus: boolean;

  constructor() {
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
