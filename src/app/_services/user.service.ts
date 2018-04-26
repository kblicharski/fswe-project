import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    const url = `${this.apiUrl}/users`;
    return this.http.get<User[]>(url);
  }

  getById(id: number): Observable<User> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get<User>(url);
  }

  create(user: User): Observable<User> {
    const url = `${this.apiUrl}/users`;
    return this.http.post<User>(url, user);
  }

  update(user: User): Observable<User> {
    const url = `${this.apiUrl}/users/${user.id}`;
    return this.http.patch<User>(url, user);
  }

  delete(id: number): Observable<User> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.delete<User>(url);
  }

  getAllRequesting(): Observable<User[]> {
    const filter = '?filter=%7B%22where%22%3A%7B%22votingStatus%22%3A%20%22requesting%22%7D%7D';
    const url = `${this.apiUrl}/users/${filter}`;
    return this.http.get<User[]>(url);
  }

  getAllUnregistered(): Observable<User[]> {
    const filter = '?filter=%7B%22where%22%3A%7B%22registrationStatus%22%3A%20%22unregistered%22%7D%7D';
    const url = `${this.apiUrl}/users/${filter}`;
    return this.http.get<User[]>(url);
  }

  changePassword(id: number, data: { oldPassword: string, newPassword: string }): Observable<Object> {
    const url = `${this.apiUrl}/users/${id}/changePassword`;
    return this.http.post<Object>(url, data);
  }

}
