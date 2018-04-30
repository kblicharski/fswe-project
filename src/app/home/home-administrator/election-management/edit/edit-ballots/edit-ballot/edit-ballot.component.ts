import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from '../../../../../../_models/office';
import { ElectionService } from '../../../../../../_services/election.service';

@Component({
  selector: 'app-edit-ballot',
  templateUrl: './edit-ballot.component.html',
  styleUrls: ['./edit-ballot.component.css']
})
export class EditBallotComponent implements OnInit {
  ballot: Office;
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
      this.electionService.getOfficeById(id).subscribe(
        (data) => {
          this.ballot = data;
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

}
