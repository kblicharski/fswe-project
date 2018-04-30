import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from '../../../../../../_models/office';
import { ElectionService } from '../../../../../../_services/election.service';
import { Candidate } from '../../../../../../_models/candidate';

@Component({
  selector: 'app-edit-ballot',
  templateUrl: './edit-ballot.component.html',
  styleUrls: ['./edit-ballot.component.css']
})
export class EditBallotComponent implements OnInit {
  ballot: Office;
  loading = true;
  candidates: Candidate[] = [];
  selectedValue = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private electionService: ElectionService,
    private auditService: AuditService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.electionService.getOfficeById(id).subscribe(
        (data) => {
          this.ballot = data;
          for (const cId of data.candidates) {
            this.electionService.getCandidateById(cId).subscribe(
              (data2) => this.candidates.push(data2)
            );
          }
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onUpdateBallot() {
    const old = this.ballot;
    const ids = [];
    for (const val of this.selectedValue) {
      ids.push(val.id);
    }
    this.ballot.candidates = ids;
    this.electionService.updateOffice(this.ballot).subscribe(
      (data) => {
        const audit = {
          action: `Ballot ${old.id} was updated`,
          time: new Date(Date.now())
        };
        this.auditService.logAudit(audit).subscribe(
          (data) => {
            this.router.navigate(['..'], {relativeTo: this.route});
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  change(e, type) {
    if (e.target.checked) {
      this.selectedValue.push(type);
    } else {
      const updateItem = this.selectedValue.find(this.findIndexToUpdate, type.id);
      const index = this.selectedValue.indexOf(updateItem);
      this.selectedValue.splice(index, 1);
    }
  }

  findIndexToUpdate(val) {
    return val.id === this;
  }

}
