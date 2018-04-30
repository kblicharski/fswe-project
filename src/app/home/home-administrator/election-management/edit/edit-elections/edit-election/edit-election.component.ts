import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Election } from '../../../../../../_models/election';
import { ElectionService } from '../../../../../../_services/election.service';

@Component({
  selector: 'app-edit-election',
  templateUrl: './edit-election.component.html',
  styleUrls: ['./edit-election.component.css']
})
export class EditElectionComponent implements OnInit {
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
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.electionService.getById(id).subscribe(
        (data) => {
          this.election = data;
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onUpdateElection() {
    const old = this.election;
    this.electionService.update(this.election).subscribe(
      (data) => {
        const audit = {
          action: `Election ${old.id} was updated`,
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
