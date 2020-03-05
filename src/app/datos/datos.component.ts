import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import {IDatos} from '../datos'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  app:string;
  user:string;
  current:boolean;
  

  constructor(private _DatosService: DatosService) { }
  datos: any ;
  errorMessage: string;

  getData(){
    this._DatosService.getData(this.app,this.user,this.current).subscribe(
      datos => this.datos = datos, error => this.errorMessage = <any> error
    );
  }

  ngOnInit() {
  }

}
