import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CandidatesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCandidates() {
    return this.http.get<any>(`${this.baseUrl}/candidate`);
  }

  newCandidate(data: any) {
    return this.http.post<any>(`${this.baseUrl}/candidate/`, data);
  }

  getCandidate(id: string) {
    return this.http.get<any>(`${this.baseUrl}/candidate/${id}`);
  }

  editCandidate(id: string, data: any) {
    return this.http.put<any>(`${this.baseUrl}/candidate/${id}`, data);
  }

  deleteCandidate(id: number) {
    const token = "123456"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.delete<any>(`${this.baseUrl}/candidate/${id}/delete`, { headers: headers });
  }
}
