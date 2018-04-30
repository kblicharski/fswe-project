import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { Vote } from '../_models/vote';

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

  getElectionIds(precinctId: number, userId: number): Observable<{ ids: number[] }> {
    const url = `${this.apiUrl}/users/${precinctId}/${userId}/getElections`;
    return this.http.get<{ ids: number[] }>(url);
  }

  getIdByUsername(username: string): Observable<number> {
    const url = `http://localhost:3000/api/users?filter=%7B%22where%22%3A%7B%22username%22%3A%22${username}%22%7D%7D`;
    return this.http.get<number>(url);
  }

  resetPassword(id: number): Observable<any> {
    const url = `${this.apiUrl}/users/${id}/resetPassword`;
    return this.http.post<any>(url, id);
  }

  changeRegistrationStatus(id: number, status: string): Observable<any> {
    const url = `${this.apiUrl}/users/${id}/changeRegistrationStatus?status=${status}`;
    return this.http.post<any>(url, id);
  }

  submitVote(vote: Vote): Observable<any> {
    const url = `${this.apiUrl}/votes`;
    // return this.http.post<any>(url, vote);
    return this.http.post<any>(url, vote);
  }

  // updateCandidateCount(): Observable<any> {
  //   const url = `${this.apiUrl}/votes`;
  //   // return this.http.post<any>(url, vote);
  //   return this.http.post<any>(url, vote);
  // }

}
