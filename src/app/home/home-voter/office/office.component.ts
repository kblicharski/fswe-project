import { Component, Input, OnInit } from '@angular/core';
import { Office } from '../../../_models/office';
import { ElectionService } from '../../../_services/election.service';
import { Candidate } from '../../../_models/candidate';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  @Input() officeId: number;
  office: Office;
  candidates: Candidate[] = [];

  constructor(
    private electionService: ElectionService
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

}
