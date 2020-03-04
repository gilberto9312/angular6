import { Injectable } from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser;
  }



  login(email: string, password: string, app: string): Observable<boolean> {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Password', `${password}`);
    headers.append('App', `${app}`);
    let body = new URLSearchParams();
    /* body.set('email', email);
    body.set('password', password);
    body.set('app', app); */


    return this.http.put('https://dev.tuten.cl/TutenREST/rest/user/' + email, body ,{headers : headers} ).pipe(
      map((response: Response) => {
        //console.log(response.json().sessionTokenBck)
        // login successful if there's a jwt token in the response
        const token = response.json().sessionTokenBck
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));//,catchError(err => of('error found')).subscribe(printResult);
      //catchError(this.handelError)
  }




  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handelError(error: Response) {

    return Observable.throw(error.json() || 'server error');

  }




}
