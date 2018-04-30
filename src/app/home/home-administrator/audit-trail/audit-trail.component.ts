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
  notInitialLoad = false;

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
        data.sort(function (a, b) {
          return new Date(b.time) - new Date(a.time);
        });
        this.audits = data;
        this.loading = false;
        this.notInitialLoad = true;
      },
      (error) => {
        console.log(error);
      });
  }


  refreshAuditLogs() {
    // Add delay to allow refresh icon to appear
    this.loading = true;
    setTimeout(() => {
      this.getAllAuditLogs();
    }, 600);
  }

}
