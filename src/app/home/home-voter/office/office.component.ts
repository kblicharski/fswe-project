import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Office } from '../../../_models/office';
import { ElectionService } from '../../../_services/election.service';
import { Candidate } from '../../../_models/candidate';
import { Vote } from '../../../_models/vote';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  @Input() officeId: number;
  @Input() electionId: number;
  @Input() userId: number;
  @Output() voted: EventEmitter<Vote> = new EventEmitter<Vote>();
  office: Office;
  candidates: Candidate[] = [];

  private candidateId: number;

  constructor(
    private electionService: ElectionService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.electionService.getOffice(this.officeId).subscribe(
      (office: Office) => {
        this.office = office;
        for (const id of office.candidates) {
          this.electionService.getCandidate(id).subscribe(
            (candidate: Candidate) => {
              this.candidates.push(candidate);
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

  onVote() {
    if (this.candidateId) {
      const vote: Vote = {
        electionId: this.electionId,
        voter: this.userId,
        time: new Date(Date.now()),
        votesCast: {
          candidateId: this.candidateId,
          ballotId: this.officeId
        }
      };
      this.userService.submitVote(vote).subscribe(
        (data) => {
          console.log(data);
          this.voted.emit(vote);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  updateSelection(selection: HTMLInputElement) {
    const selectedCandidate = this.candidates.filter(c => c.name === selection.id)[0];
    this.candidateId = selectedCandidate.id;
  }
}
