import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(
      `${this.apiUrl}/users/login`,
      {username: username, password: password},
      {
        params: new HttpParams().set('include', 'user')
      })
      .map(response => {
        // login successful if there's a jwt token in the response
        // if (response && response.token) {
        if (response) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
        return response.user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
