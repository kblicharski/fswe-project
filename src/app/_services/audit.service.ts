import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuditService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  logAudit(audit: { action: string, time: Date }): Observable<any> {
    const url = `${this.apiUrl}/audits`;
    return this.http.post<any>(url, audit);
  }

}
