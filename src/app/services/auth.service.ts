import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './../response/auth-reponse';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _token: string;

  constructor(private http: HttpClient) {
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem("token") != null) {
      this._token = sessionStorage.getItem("token");
      return this._token;
    }
    return null;
  }


  login(login: any): Observable<AuthResponse> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<AuthResponse>(`${environment.serviceUrl}login`, login, { headers: httpHeaders });
  }


  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem("token", this._token);
  }

}
