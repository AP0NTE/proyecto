import { Component, OnInit } from '@angular/core';
import {Estudiante}from'../models/estudiante';
import {EstudianteService}from '../services/estudiante.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabla-e',
  templateUrl: './tabla-e.component.html',
  styleUrls: ['./tabla-e.component.css']
})
export class TablaEComponent implements OnInit {
  filtro='';
  mostrarHome:boolean;
  mostrarRestudiantes:boolean;
  mostrarRestudiante:boolean;
  mostrarTestudiante:boolean;
  mostrarTestudiantes:boolean;
  mostrarElestudiante:boolean;
  mostrarElestudiantes:boolean;
  mostrarEestudiante:boolean;
  mostrarEestudiantes:boolean;
  estudiante :Estudiante[];
  estudiantes:Estudiante;
  Id:number;
  constructor(private estudianteService:EstudianteService,private route :ActivatedRoute,private location :Location) { }

  ngOnInit() {
    this.MostrarTd();
    this.getAll();
  }
  getAll(){
    this.estudianteService.getAll().subscribe(estudiante=>this.estudiante=estudiante);
  }
  get(): void {
    const id =this.Id;
    //+this.route.snapshot.paramMap.get('id');
    this.estudianteService.get(id)
    .subscribe(hero => this.estudiantes = hero);
    }
    update(): void {
      this.estudianteService.update(this.estudiantes)
      .subscribe(() => this.goBack());
      }
  delete(): void {
    this.estudianteService.delete(this.estudiantes)
    .subscribe(()=>this.goBack());
  }     
  goBack(): void {
    this.MostrarTd();
    this.getAll();
    //this.location.back();
    }
  MostrarRe():void{
    this.mostrarRestudiantes=true;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarRd():void{
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=true;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarTe(){
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=true;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarTd(){
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=true;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEle(){
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=true;
    this.mostrarHome=false;
  }
  MostrarEld(){
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=true;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEdd2(id:number){
    
    this.Id=id;
    console.log(this.Id);
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=true;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
    this.get();
  }
  MostrarEde(){
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=true;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=true;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  ocultarTodo(){
    this.mostrarRestudiantes=false;
    this.mostrarRestudiante=false;
    this.mostrarEestudiante=false;
    this.mostrarEestudiantes=false;
    this.mostrarTestudiante=false;
    this.mostrarTestudiantes=false;
    this.mostrarElestudiante=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=true;
  }
}
