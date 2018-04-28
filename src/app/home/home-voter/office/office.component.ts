import { Component, Input, OnInit } from '@angular/core';
import { Office } from '../../../_models/office';
import { ElectionService } from '../../../_services/election.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  @Input() officeId: number;
  office: Office;
  candidateIds: number[] = [];

  constructor(
    private electionService: ElectionService
  ) {
  }

  ngOnInit() {
    this.electionService.getOffice(this.officeId).subscribe(
      (office: Office) => {
        this.office = office;
        this.candidateIds = office.candidates;
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log(this.officeId);
    // for (const candidate of this.officeId.candidates) {
    //   console.log(candidate);
    // }
  }

}
