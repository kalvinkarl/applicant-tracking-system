import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant, Achievement, Experience, Training  } from 'src/app/models/admin';

const APPLICANTS_DATA_KEY = 'dataSource';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  findApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(`${environment.apiUrl}/admin/applicants`, httpOptions);
  }
  findGeneral(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(`${environment.apiUrl}/admin/applicants/General`, httpOptions);
  }
  createEvaluation(achievement: Achievement): Observable<Achievement> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/achievement`, achievement ,httpOptions);
  }
  createExperience(experience: Experience): Observable<Experience> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/achievement/training`,experience, httpOptions);
  }
  createTraining(training: Training): Observable<Training> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/achievement/experience`,training, httpOptions);
  }
  
  public saveApplicantsData(applicants: Applicant[]): void {
    window.localStorage.removeItem(APPLICANTS_DATA_KEY);
    window.localStorage.setItem(APPLICANTS_DATA_KEY, JSON.stringify(applicants));
  }
  public getApplicantsData(): Applicant[] {
    return JSON.parse(localStorage.getItem(APPLICANTS_DATA_KEY)+'');
  }
}
