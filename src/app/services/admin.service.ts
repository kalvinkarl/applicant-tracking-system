import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant, Achievement, Experience, Training  } from 'src/app/models/admin';

const DATA_SOURCE_KEY = 'dataSource';
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
    return this.http.get<Applicant[]>(`${environment.apiUrl}/admin/applicants/all`, httpOptions);
  }
  findAchievements(applicant: Applicant): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/admin/applicants/achievements/${applicant.id}`, httpOptions);
  }

  createAchievement(achievement: Achievement): Observable<Achievement> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/achievement`, achievement ,httpOptions);
  }
  createExperience(experience: Experience): Observable<Experience> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/achievement/experience`,experience, httpOptions);
  }
  createTraining(training: Training): Observable<Training> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/achievement/training`,training, httpOptions);
  }
  updateAchievement(achievement: Achievement): Observable<Achievement> {
    return this.http.put(`${environment.apiUrl}/admin/applicants/achievement`, achievement ,httpOptions);
  }
  updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put(`${environment.apiUrl}/admin/applicants/achievement/experience`,experience, httpOptions);
  }
  updateTraining(training: Training): Observable<Training> {
    return this.http.put(`${environment.apiUrl}/admin/applicants/achievement/training`,training, httpOptions);
  }

  public deleteDataSource(): void {
    window.localStorage.removeItem(DATA_SOURCE_KEY);
  }

  public saveApplicantsData(applicants: Applicant[]): void {
    window.localStorage.removeItem(DATA_SOURCE_KEY);
    window.localStorage.setItem(DATA_SOURCE_KEY, JSON.stringify(applicants));
  }

  public async getApplicantsData(): Promise<Applicant[]> {
    return await JSON.parse(localStorage.getItem(DATA_SOURCE_KEY)+'');
  }


}
