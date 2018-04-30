import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../../_services/election.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.css']
})
export class AuditTrailComponent implements OnInit {
  loading = true;
  audits: any = [];

  constructor(
    private electionService: ElectionService
  ) {
  }

  ngOnInit() {
    this.getAllAuditLogs();
  }

  private getAllAuditLogs() {
    this.electionService.getAuditLogs().subscribe(
      (data) => {
        this.audits = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      });
  }

}
