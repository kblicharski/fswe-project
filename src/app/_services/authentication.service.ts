import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const params = new HttpParams().set('username', username).set('password', password);
    console.log(params);
    return this.http.post<any>(
      `${this.apiUrl}/users/loginUser`,
      {username: username, password: password},
      {
        params: params
      }).pipe(
      map(response => {
        console.log(response);
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
        return response.user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
