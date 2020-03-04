import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  data: Array<Data>= [] ;
  errorMessage: string;
  constructor(private _datoService: DatosService ) { }

  getData() {
  this._datoService.getData().subscribe(
    posts => this.posts = posts, error => this.errorMessage = <any> error
  );
  }

  constructor() { }

  ngOnInit() {
  }

}
