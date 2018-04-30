import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Election } from '../../_models/election';
import { ElectionService } from '../../_services/election.service';
import { Vote } from '../../_models/vote';

@Component({
  selector: 'app-home-voter',
  templateUrl: './home-voter.component.html',
  styleUrls: ['./home-voter.component.css']
})
export class HomeVoterComponent implements OnInit {
  loading = true;
  elections: Election[] = [];
  localElections: Election[] = [];
  stateElections: Election[] = [];
  nationalElections: Election[] = [];
  currentUser: User;

  constructor(
    private userService: UserService,
    private electionService: ElectionService
  ) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadAllElections();
  }

  onSubmitVoteRequest() {
    this.currentUser.votingStatus = 'requesting';
    this.userService.update(this.currentUser).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ongoingCurrentElections() {
    return !this.loading || this.elections.length > 0;
  }

  userIsApproved() {
    return this.currentUser.votingStatus === 'approved';
  }

  userIsRequesting() {
    return this.currentUser.votingStatus === 'requesting';
  }

  loadAllElections() {
    const precinctId = this.currentUser.precinctId;
    // const precinctId = 200;
    this.userService.getElectionIds(precinctId, this.currentUser.id).subscribe(
      (electionIds: { ids: number[] }) => {
        for (const id of electionIds.ids) {
          this.electionService.getElection(id).subscribe(
            (election: Election) => {
              this.elections.push(election);
              switch (election.type) {
                case 'local':
                  this.localElections.push(election);
                  break;
                case 'state':
                  this.stateElections.push(election);
                  break;
                case 'national':
                  this.nationalElections.push(election);
                  break;
              }
            },
            (error) => {
              console.log(error);
            }
          );
          this.loading = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleVote(vote: Vote) {
    console.log(vote);
    this.elections = [];
    this.localElections = [];
    this.stateElections = [];
    this.nationalElections = [];
    this.loadAllElections();
    this.electionService.incrementCandidateCount(vote.votesCast.candidateId).subscribe(
      (data) => console.log(data)
    );
  }

}
