import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user.model';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.baseUrl + '/api/users');
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + '/api/users/' + id);
  }

  create(user: User) {
    return this.http.post(this.baseUrl + '/api/users', user);
  }

  update(user: User) {
    return this.http.put(this.baseUrl + '/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/api/users/' + id);
  }
}
