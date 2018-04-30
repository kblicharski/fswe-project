import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../../../../_services/election.service';
import { Election } from '../../../../../_models/election';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-elections',
  templateUrl: './edit-elections.component.html',
  styleUrls: ['./edit-elections.component.css']
})
export class EditElectionsComponent implements OnInit {
  elections: Election[] = [];
  private loading = false;

  constructor(
    private electionService: ElectionService,
    private auditService: AuditService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getAllElections();
  }

  getAllElections() {
    this.electionService.getAll().subscribe(
      (data) => {
        this.elections = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshElections() {
    // Add delay to allow refresh icon to appear
    this.loading = true;
    setTimeout(() => {
      this.getAllElections();
    }, 600);
  }

  onDeleteElection(election) {
    this.electionService.delete(election.id).subscribe(
      (data) => {
        const audit = {
          action: `Election '${election.description}' was deleted`,
          time: new Date(Date.now())
        };
        this.auditService.logAudit(audit).subscribe();
        this.getAllElections();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEditElection(election: Election) {
    this.router.navigate([`${election.id}`], {relativeTo: this.route});
  }

}
