import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../../../_services/election.service';
import { Office } from '../../../../../_models/office';

@Component({
  selector: 'app-create-ballot',
  templateUrl: './create-ballot.component.html',
  styleUrls: ['./create-ballot.component.css']
})
export class CreateBallotComponent implements OnInit {
  ballot: Office;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private electionService: ElectionService,
    private auditService: AuditService,
  ) {
  }

  ngOnInit() {
  }

  onCreateBallot() {
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

}
