import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private auth: AuthService) {
  }

  createAuthHeader() {
    const token = sessionStorage.getItem('token');
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })

    return headers;
  }

  get(url) {
    const headers = this.createAuthHeader();

    return this.http.get(url, {headers: headers});
  }

  post(url, data) {
    const headers = this.createAuthHeader();

    return this.http.post(url, data, {headers: headers});
  }


  put(url, data) {
    const headers = this.createAuthHeader();

    return this.http.put(url, data, {headers: headers});
  }

  delete(url) {
    const headers = this.createAuthHeader();

    return this.http.delete(url, {headers: headers});
  }
}
