import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Election } from '../_models/election';
import { Office } from '../_models/office';
import { Candidate } from '../_models/candidate';

@Injectable()
export class ElectionService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Election[]> {
    const url = `${this.apiUrl}/elections`;
    return this.http.get<Election[]>(url);
  }

  getById(id: number): Observable<Election> {
    const url = `${this.apiUrl}/elections/${id}`;
    return this.http.get<Election>(url);
  }

  create(election: Election): Observable<Election> {
    const url = `${this.apiUrl}/elections`;
    return this.http.post<Election>(url, election);
  }

  update(election: Election): Observable<Election> {
    const url = `${this.apiUrl}/elections/${election.id}`;
    return this.http.patch<Election>(url, election);
  }

  delete(id: number): Observable<Election> {
    const url = `${this.apiUrl}/elections/${id}`;
    return this.http.delete<Election>(url);
  }

  getElection(electionId: number): Observable<Election> {
    const url = `${this.apiUrl}/elections/${electionId}`;
    return this.http.get<Election>(url);
  }

  getOffice(officeId: number): Observable<Office> {
    const url = `${this.apiUrl}/offices/${officeId}`;
    return this.http.get<Office>(url);
  }

  getCandidate(candidateId: number): Observable<Candidate> {
    const url = `${this.apiUrl}/candidates/${candidateId}`;
    return this.http.get<Candidate>(url);
  }

}
