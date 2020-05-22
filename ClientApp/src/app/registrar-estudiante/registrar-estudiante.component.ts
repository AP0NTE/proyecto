import { Component, OnInit } from '@angular/core';
import {EstudianteService} from '../services/estudiante.service';
import {Estudiante} from '../models/estudiante'

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {

  constructor(private estudianteService :EstudianteService){}
    estudiante : Estudiante;

  ngOnInit() {
    this.estudiante ={id:0, email :'', usuario :'', clave :'',
    salon:'',acudiente :'',sexo:'',nombre:'',apellido:'',fechan :new Date, documento:0,telefono:0,estado:''}
  }
  add(){
    console.log(this.estudiante);
    this.estudianteService.add(this.estudiante)
    .subscribe();
  }

}
