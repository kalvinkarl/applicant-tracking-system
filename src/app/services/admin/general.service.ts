import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneralEvaluation, Experience, Training } from 'src/app/models/admin/general';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient) { }
  createEvaluation(generalEvaluation: GeneralEvaluation): Observable<GeneralEvaluation> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/general/evaluation`, generalEvaluation ,httpOptions);
  }
  createExperience(experience: Experience): Observable<Experience> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/general/evaluation/experience`,experience, httpOptions);
  }
  createTraining(training: Training): Observable<Training> {
    return this.http.post(`${environment.apiUrl}/admin/applicants/general/evaluation/training`,training, httpOptions);
  }
}
