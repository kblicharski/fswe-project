import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../../../_services/election.service';
import { Candidate } from '../../../../../_models/candidate';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {
  candidate: Candidate;
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

  onCreateCandidate() {
    this.electionService.createCandidate(this.candidate).subscribe(
      (data) => {
        const audit = {
          action: `Candidate ${this.candidate.id} was created`,
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
