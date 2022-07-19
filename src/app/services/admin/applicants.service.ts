import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant } from 'src/app/models/admin/applicant';
import { GeneralEvaluation, Experience, Training } from 'src/app/models/admin/general';

const APPLICANTS_DATA_KEY = 'applicatsData';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {
  constructor(private http: HttpClient) { }
  findAll(): Observable<Applicant> {
    return this.http.get(`${environment.apiUrl}/admin/applicants`, httpOptions);
  }
  findGeneral(): Observable<Applicant> {
    return this.http.get(`${environment.apiUrl}/admin/applicants/General`, httpOptions);
  }
  createEvaluation(generalEvaluation: GeneralEvaluation): Observable<GeneralEvaluation> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/general/evaluation`, generalEvaluation ,httpOptions);
  }
  createExperience(experience: Experience): Observable<Experience> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/general/evaluation/experience`,experience, httpOptions);
  }
  createTraining(training: Training): Observable<Training> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/general/evaluation/training`,training, httpOptions);
  }
  
  public saveApplicantsData(applicants: Applicant): void {
    window.localStorage.removeItem(APPLICANTS_DATA_KEY);
    window.localStorage.setItem(APPLICANTS_DATA_KEY, JSON.stringify(applicants));
  }
  public getApplicantsData(): Applicant[] {
    return JSON.parse(localStorage.getItem(APPLICANTS_DATA_KEY)+'');
  }
}
