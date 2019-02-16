import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Actividades } from './../models/actividad.model';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  @Input() actividad: Actividades;
  @HostListener ('attr.class') cssClass = 'text-danger';
  constructor() {
   }
  ngOnInit() {
  }

}
