import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../../../_services/election.service';

@Component({
  selector: 'app-create-ballot',
  templateUrl: './create-ballot.component.html',
  styleUrls: ['./create-ballot.component.css']
})
export class CreateBallotComponent implements OnInit {
  ballot: any = {
    title: '',
    description: '',
    candidates: []
  };
  loading = true;
  candidates: any;
  selectedValue = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private electionService: ElectionService,
    private auditService: AuditService,
  ) {
  }

  ngOnInit() {
    this.electionService.getAllCandidates().subscribe(
      (data) => {
        this.candidates = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCreateBallot() {
    const ids = [];
    for (const val of this.selectedValue) {
      ids.push(val.id);
    }
    this.ballot.candidates = ids;
    this.electionService.createOffice(this.ballot).subscribe(
      (data) => {
        const audit = {
          action: `Ballot ${this.ballot.id} was created`,
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
