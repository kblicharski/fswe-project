import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getAll() {
    const url = `${this.apiUrl}/users`;
    return this.http.get<User[]>(url);
  }

  getById(id: number) {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get(url);
  }

  create(user: User) {
    const url = `${this.apiUrl}/users`;
    return this.http.post(url, user);
  }

  update(user: User) {
    const url = `${this.apiUrl}/users/${user.id}`;
    return this.http.patch(url, user);
  }

  delete(id: number) {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.delete(url);
  }

}
