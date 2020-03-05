import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {IDatos} from './datos'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //const uri= 'https://dev.tuten.cl/TutenREST/rest/user/';
  constructor(private http: Http, private authenticationService: AuthService  ) {}

  getData(app:string,user:string,current:boolean){
    
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('App', `${app}`);
    headers.append('Adminemail','testapis@tuten.cl');
    headers.append('Token', this.authenticationService.token );


    return  this.http.get('https://dev.tuten.cl/TutenREST/rest/user/'+user+'/bookings?current='+current , {headers : headers}).pipe(
      map((response: Response)=>{
        return response.json();
      })
    );
  }

}
