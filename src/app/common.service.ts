import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://192.168.13.240:8080';
  loginUser(userData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl + '/koin/login', userData
      // tslint:disable-next-line:object-literal-shorthand
      , { headers: headers });
  }

  signUpUser(userData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl + '/koin/signup', userData
      // tslint:disable-next-line:object-literal-shorthand
      , { headers: headers });
  }

  getTransactions(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.get(this.apiUrl + '/koin/transaction', {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });

  }

  sendKoin(add, amount): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.get(this.apiUrl + '/koin/send/' + add + '/' + amount, {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });

  }

  getUserData(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl + '/koin/user',
    {
      email: window.localStorage.getItem('email')
    }, {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });
  }

  getUserAddress(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return this.http.get(this.apiUrl + '/koin/address', {
      // tslint:disable-next-line:object-literal-shorthand
      headers: headers
    });
  }
}
