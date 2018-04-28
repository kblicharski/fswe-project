import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Election } from '../../_models/election';
import { ElectionService } from '../../_services/election.service';

@Component({
  selector: 'app-home-voter',
  templateUrl: './home-voter.component.html',
  styleUrls: ['./home-voter.component.css']
})
export class HomeVoterComponent implements OnInit {
  private currentUser: User;
  loading = true;
  elections: Election[] = [];
  localElections: Election[] = [];
  stateElections: Election[] = [];
  nationalElections: Election[] = [];

  constructor(
    private userService: UserService,
    private electionService: ElectionService
  ) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadAllElections();
  }

  private loadAllElections() {
    this.loading = true;
    // const precinctId = this.currentUser.precinctId;
    const precinctId = 200;
    this.userService.getElections(precinctId, this.currentUser.id)
      .subscribe(
        elections => {
          this.elections = elections;
          this.localElections = elections.filter((election) => election.type === 'local');
          this.stateElections = elections.filter((election) => election.type === 'state');
          this.nationalElections = elections.filter((election) => election.type === 'national');
          this.loading = false;
        });
  }

  onSubmitVoteRequest() {
    this.currentUser.votingStatus = 'requesting';
    this.userService.update(this.currentUser).subscribe(
      (data) => {
        console.log('patched user');
        console.log(data);
      },
      (error) => {
        console.log('failed to patch user');
        console.log(error);
      }
    );
  }

  ongoingCurrentElections() {
    return this.elections.length > 0;
  }

  userIsApproved() {
    return this.currentUser.votingStatus === 'approved';
  }

  userIsRequesting() {
    return this.currentUser.votingStatus === 'requesting';
  }

}
