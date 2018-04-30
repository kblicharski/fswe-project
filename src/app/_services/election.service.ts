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

  getAuditLogs(): Observable<any> {
    const url = `${this.apiUrl}/audits`;
    return this.http.get<any>(url);
  }

  incrementCandidateCount(candidateId: number, userId: number): Observable<any> {
    const url = `${this.apiUrl}/candidates/${candidateId}/increment?uid=${userId}`;
    return this.http.post<any>(url, {test: -1});
  }

  getAllCandidates(): Observable<Candidate[]> {
    const url = `${this.apiUrl}/candidates`;
    return this.http.get<Candidate[]>(url);
  }

  getCandidateById(id: number): Observable<Candidate> {
    const url = `${this.apiUrl}/candidates/${id}`;
    return this.http.get<Candidate>(url);
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {
    const url = `${this.apiUrl}/candidates`;
    return this.http.post<Candidate>(url, candidate);
  }

  updateCandidate(candidate: Candidate): Observable<Candidate> {
    const url = `${this.apiUrl}/candidates/${candidate.id}`;
    return this.http.patch<Candidate>(url, candidate);
  }

  deleteCandidate(id: number): Observable<Candidate> {
    const url = `${this.apiUrl}/candidates/${id}`;
    return this.http.delete<Candidate>(url);
  }

  getAllOffices(): Observable<Office[]> {
    const url = `${this.apiUrl}/offices`;
    return this.http.get<Office[]>(url);
  }

  getOfficeById(id: number): Observable<Office> {
    const url = `${this.apiUrl}/offices/${id}`;
    return this.http.get<Office>(url);
  }

  createOffice(office: Office): Observable<Office> {
    const url = `${this.apiUrl}/offices`;
    return this.http.post<Office>(url, office);
  }

  updateOffice(office: Office): Observable<Office> {
    const url = `${this.apiUrl}/offices/${office.id}`;
    return this.http.patch<Office>(url, office);
  }

  deleteOffice(id: number): Observable<Office> {
    const url = `${this.apiUrl}/offices/${id}`;
    return this.http.delete<Office>(url);
  }

  getAllCandidateIds(): Observable<number> {
    const url = 'http://localhost:3000/api/candidates?filter=%7B%22fields%22%3A%7B%22id%22%3Atrue%7D%7D';
    return this.http.get<number>(url);
  }

  getAllBallotIds(): Observable<number> {
    const url = 'http://localhost:3000/api/offices?filter=%7B%22fields%22%3A%7B%22id%22%3Atrue%7D%7D';
    return this.http.get<number>(url);
  }

  getAllManagers(): Observable<any> {
    const url = 'http://localhost:3000/api/users?filter=%7B%22where%22%3A%7B%22role%22%3A%22manager%22%7D%7D';
    return this.http.get<number>(url);
  }

  getPrecincts(): Observable<any> {
    const url = 'http://localhost:3000/api/zipCodes?filter=%7B%22fields%22%3A%7B%22precincts%22%3Atrue%7D%7D';
    return this.http.get<number>(url);
  }

}
