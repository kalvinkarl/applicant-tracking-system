import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant } from 'src/app/models/admin/applicant';

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
}
