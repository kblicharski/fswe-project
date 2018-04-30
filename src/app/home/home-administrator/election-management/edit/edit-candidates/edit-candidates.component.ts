import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../../../../_services/election.service';
import { Candidate } from '../../../../../_models/candidate';
import { Election } from '../../../../../_models/election';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-candidates',
  templateUrl: './edit-candidates.component.html',
  styleUrls: ['./edit-candidates.component.css']
})
export class EditCandidatesComponent implements OnInit {
  candidates: Candidate[] = [];
  private loading = false;

  constructor(
    private electionService: ElectionService,
    private auditService: AuditService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getAllCandidates();
  }

  getAllCandidates() {
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

  refreshCandidates() {
    // Add delay to allow refresh icon to appear
    this.loading = true;
    setTimeout(() => {
      this.getAllCandidates();
    }, 600);
  }


  onDeleteCandidate(candidate) {
    this.electionService.deleteCandidate(candidate.id).subscribe(
      (data) => {
        const audit = {
          action: `Candidate ${candidate.id} was deleted`,
          time: new Date(Date.now())
        };
        this.auditService.logAudit(audit);
        this.getAllCandidates();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEditCandidate(election: Election) {
    this.router.navigate([`${election.id}`], {relativeTo: this.route});
  }

}
