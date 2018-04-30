import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../../../../_services/election.service';
import { Office } from '../../../../../_models/office';
import { AuditService } from '../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ballots',
  templateUrl: './edit-ballots.component.html',
  styleUrls: ['./edit-ballots.component.css']
})
export class EditBallotsComponent implements OnInit {
  ballots: Office[] = [];
  private loading = false;

  constructor(
    private electionService: ElectionService,
    private auditService: AuditService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getAllBallots();
  }

  getAllBallots() {
    this.electionService.getAllOffices().subscribe(
      (data) => {
        this.ballots = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshBallots() {
    // Add delay to allow refresh icon to appear
    this.loading = true;
    setTimeout(() => {
      this.getAllBallots();
    }, 600);
  }

  onDeleteBallot(ballot) {
    this.electionService.deleteOffice(ballot.id).subscribe(
      (data) => {
        const audit = {
          action: `Ballot ${ballot.id} was deleted`,
          time: new Date(Date.now())
        };
        this.auditService.logAudit(audit);
        this.getAllBallots();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEditBallot(ballot: Office) {
    this.router.navigate([`${ballot.id}`], {relativeTo: this.route});
  }

}
