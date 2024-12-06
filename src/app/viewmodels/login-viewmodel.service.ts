import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.models';

@Injectable({
  providedIn: 'root',
})
export class LoginViewmodelService {
  private apiUrl = 'https://app.juankuga.com/wspatitas/login.php';
  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, {
      usuario,
      password,
    });
  }
}
