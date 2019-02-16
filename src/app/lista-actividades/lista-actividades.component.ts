import { Component, OnInit } from '@angular/core';
import { Actividades } from './../models/actividad.model';

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.component.html',
  styleUrls: ['./lista-actividades.component.css']
})
export class ListaActividadesComponent implements OnInit {
  actividades :Actividades[];
  constructor() {
    this.actividades = [];
   }
  guardar(n:string, p:number):boolean{
    this.actividades.push(new Actividades(n,p));
    console.log(this.actividades);
    return false;
  }
  ngOnInit() {
  }

}
