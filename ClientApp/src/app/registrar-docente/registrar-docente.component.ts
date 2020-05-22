import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../services/docente.service';
import {Docente} from '../models/docente'

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {

  constructor(private docenteService :DocenteService){}
    docente : Docente;

  ngOnInit() {
    this.docente ={id:0, email :'', usuario :'', clave :'',
    salon:'',lic :'',sexo:'',nombre:'',apellido:'',fechan :new Date, documento:0,telefono:0,estado:''}
  }
  add(){
    this.docenteService.add(this.docente)
    .subscribe();
  }

}
