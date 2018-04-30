import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuditService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  logAudit(audit: { action: string, time: Date }) {
    const url = `${this.apiUrl}/audits`;
    this.http.post<any>(url, audit).subscribe(
      (data) => {
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
