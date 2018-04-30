import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../../../../../_services/audit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ElectionService } from '../../../../../../_services/election.service';
import { Office } from '../../../../../../_models/office';

@Component({
  selector: 'app-edit-election',
  templateUrl: './edit-election.component.html',
  styleUrls: ['./edit-election.component.css']
})
export class EditElectionComponent implements OnInit {
  election: any = {};
  loading = true;

  ballots = [];
  managers = [];
  precincts = [];

  selectedBallots = [];
  selectedManagers = [];
  selectedPrecincts = [];

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
          this.electionService.getAllOffices().subscribe(
            (data) => {
              this.ballots = data;
              this.electionService.getAllManagers().subscribe(
                (data) => {
                  this.managers = data;
                  this.electionService.getPrecincts().subscribe(
                    (data) => {
                      this.precincts = data;
                      this.loading = false;
                    },
                    (error) => {
                      console.log(error);
                    }
                  );

                },
                (error) => {
                  console.log(error);
                }
              );
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onUpdateElection() {
    const old = this.election;

    const precinctIds = [];
    const managerIds = [];
    const ballotIds = [];

    for (const val of this.selectedBallots) {
      ballotIds.push(val.id);
    }

    for (const val of this.selectedManagers) {
      managerIds.push(val.id);
    }

    for (const val of this.selectedPrecincts) {
      precinctIds.push(val.id);
    }

    this.election.offices = ballotIds;
    this.election.precincts = precinctIds;
    this.election.managers = managerIds;

    this.electionService.update(this.election).subscribe(
      (data) => {
        const audit = {
          action: `Election '${old.description}' was updated`,
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


  changePrecincts($event, precinct: any) {
    if ($event.target.checked) {
      this.selectedPrecincts.push(precinct);
    } else {
      const updateItem = this.selectedPrecincts.find(this.findIndexToUpdate, precinct.id);
      const index = this.selectedPrecincts.indexOf(updateItem);
      this.selectedPrecincts.splice(index, 1);
    }
  }


  changeBallots($event, ballot: Office) {
    if ($event.target.checked) {
      this.selectedBallots.push(ballot);
    } else {
      const updateItem = this.selectedBallots.find(this.findIndexToUpdate, ballot.id);
      const index = this.selectedBallots.indexOf(updateItem);
      this.selectedBallots.splice(index, 1);
    }
  }

  changeManagers($event, manager: any) {
    if ($event.target.checked) {
      this.selectedManagers.push(manager);
    } else {
      const updateItem = this.selectedManagers.find(this.findIndexToUpdate, manager.id);
      const index = this.selectedManagers.indexOf(updateItem);
      this.selectedManagers.splice(index, 1);
    }
  }

  findIndexToUpdate(val) {
    return val.id === this;
  }

}
