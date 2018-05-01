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
  userLoading = false;
  elections: Election[];
  localElections: Election[] = [];
  stateElections: Election[] = [];
  nationalElections: Election[] = [];
  currentUser: User;

  constructor(
    private userService: UserService,
    private electionService: ElectionService,
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

  loadAllElections() {
    const precinctId = this.currentUser.precinctId;
    this.elections = [];
    this.userService.getElectionIds(precinctId, this.currentUser.id).subscribe(
      (electionIds: { ids: number[] }) => {
        if (electionIds.ids.length === 0) {
          this.loading = false;
        }

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
              this.loading = false;
            },
            (error) => {
              console.log(error);
            }
          );

        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleVote(vote: Vote) {
    let election: Election;
    this.electionService.getById(vote.electionId).subscribe(
      (data: Election) => {
        election = data;
        switch (election.type) {
          case 'local':
            this.localElections = this.localElections.filter(e => e.id !== election.id);
            break;
          case 'state':
            this.stateElections = this.stateElections.filter(e => e.id !== election.id);
            break;
          case 'national':
            this.nationalElections = this.nationalElections.filter(e => e.id !== election.id);
            break;
        }
        this.elections = this.localElections.concat(this.stateElections.concat(this.nationalElections));
      },
      (error) => {
        console.log(error);
      }
    );
    this.electionService.incrementCandidateCount(vote.votesCast.candidateId, vote.voter).subscribe(
      data => {
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshUser() {
    this.userLoading = true;
    setTimeout(
      this.userService.getById(this.currentUser.id).subscribe(
        (data) => {
          console.log(data);
          this.userLoading = false;
          this.currentUser = data;
          localStorage.setItem('currentUser', JSON.stringify(data));
        },
        (error) => {
          console.log(error);
        }
      ), 600);
  }

}
