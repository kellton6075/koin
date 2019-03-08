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
  /**
   * @method getUserJSON()
   * @desc used to get json file from assets folder.
   */
  public getUserJSON(): Observable<any> {
    // const headers = new HttpHeaders({
    //   // tslint:disable-next-line:object-literal-key-quotes
    //   'Authorization': 'Basic ' + btoa(STORAGE_KEYS.CONSUMER_KEY + ':' +
    //    STORAGE_KEYS.CONSUMER_SECRET_KEY),
    //    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // });
    // this.http.post(API_ENDPOINTS.AUTHORIZE, 'grant_type=client_credentials'
    // // tslint:disable-next-line:object-literal-shorthand
    // , { headers: headers }).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       console.log('Client-side error occured.');
    //     } else {
    //       console.log('Server-side error occured.');
    //     }
    //   }
    // );
    return this.http.get('assets/data.json');
  }
}
