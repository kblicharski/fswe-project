import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuditService } from './audit.service';

@Injectable()
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private auditService: AuditService
  ) {
  }

  login(username: string, password: string) {
    const params = new HttpParams().set('username', username).set('password', password);
    return this.http.post<any>(
      `${this.apiUrl}/users/loginUser`,
      {username: username, password: password},
      {
        params: params
      }).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response.status));
        }
        return response.status;
      }));
  }

  logout() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const audit = {
      action: `${user.username} logged out`,
      time: new Date(Date.now())
    };
    this.auditService.logAudit(audit).subscribe(
      (data) => {
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    localStorage.removeItem('currentUser');
  }

}
