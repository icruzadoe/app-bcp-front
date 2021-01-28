import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TypeChangeCurrency} from '../model/type-change-currency';
import {AuthService} from '../services/auth.service';
import {map, tap} from 'rxjs/operators';
import {environment} from './../../environments/environment';
import {HttpService} from './../services/http.service';


@Injectable({
  providedIn: 'root'
})
export class TypeChangeCurrencyService {
  private httpHeaders;
  token: string = this.auth.token;

  constructor(private http: HttpService, private auth: AuthService) {
  }

  getAllTypeChange(): any {
    return this.http.get(`${environment.serviceUrl}api/money/type`);
  }

  calculate(request:any): any {
    return this.http.post(`${environment.serviceUrl}api/money/calculate`,request)
  }
}
