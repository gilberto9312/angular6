import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   email: string;
   password: string;
   app: string
   error: string;

  constructor( private router: Router,
               private authenticationService: AuthService) {}

  ngOnInit() {
    this.authenticationService.logout();
  }


  login(e) {

   e.preventDefault();


    this.authenticationService.login(this.email, this.password, this.app)
      .subscribe(result => {

        console.log(result);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');


  }

}
