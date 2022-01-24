import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let data = {
      client_id: 'Rb6yDNb6muY6Wr9iGybl193VzO6BqOuleLGblg14',
      client_secret: 'NjsLaIedGub9LC2xAKHIt7kiN4DiSBLolT74w2PYrOu4PPdRxCNqgZDLS1UlqwSQry2HSmRj21MWcOiKOuLq8UtsD0LBic26SxJAEHqf7AaZ5C6sOSG9WrHf3gOzJkmY',
      grant_type: 'password',
      username: username,
      password: password,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    return this.http.post<any>(`${this.baseUrl}/o/token/`, data, { headers: headers, params: data });
  }
}
