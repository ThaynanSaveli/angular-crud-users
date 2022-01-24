import { HttpClient } from '@angular/common/http';
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
      username: username,
      password: password
    }
    return this.http.get<any>(`${this.baseUrl}/login/`, { params: data });
  }
}
