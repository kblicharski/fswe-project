import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../../../_services/election.service';
import { Office } from '../../../../../_models/office';
import { Election } from '../../../../../_models/election';

@Component({
  selector: 'app-create-election',
  templateUrl: './create-election.component.html',
  styleUrls: ['./create-election.component.css']
})
export class CreateElectionComponent implements OnInit {
  election: Election;
  loading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private electionService: ElectionService,
    private auditService: AuditService,
  ) {
  }

  ngOnInit() {
  }

  onCreateElection() {
    this.electionService.create(this.election).subscribe(
      (data) => {
        const audit = {
          action: `Election ${this.election.id} was created`,
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
