import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../../../../_services/election.service';
import { Candidate } from '../../../../../../_models/candidate';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {
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
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.electionService.getCandidateById(id).subscribe(
        (data) => {
          this.candidate = data;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onUpdateCandidate() {
    const old = this.candidate;
    this.electionService.updateCandidate(this.candidate).subscribe(
      (data) => {
        const audit = {
          action: `Candidate '${old.id}' was updated`,
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
