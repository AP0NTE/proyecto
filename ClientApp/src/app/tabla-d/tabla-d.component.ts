import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../services/docente.service';
import {Docente} from '../models/docente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tabla-d',
  templateUrl: './tabla-d.component.html',
  styleUrls: ['./tabla-d.component.css']
})
export class TablaDComponent implements OnInit {
  filtro='';
  mostrarHome:boolean;
  mostrarRestudiantes:boolean;
  mostrarRdocente:boolean;
  mostrarTdocente:boolean;
  mostrarTestudiantes:boolean;
  mostrarEldocente:boolean;
  mostrarElestudiantes:boolean;
  mostrarEdocente:boolean;
  mostrarEestudiantes:boolean;
  docente :Docente[];
  docentes:Docente;
  Id:number;
  constructor(private docenteService:DocenteService,private route :ActivatedRoute,private location :Location) { }

  ngOnInit() {
    this.MostrarTd();
    this.getAll();
  }
  getAll(){
    this.docenteService.getAll().subscribe(docente=>this.docente=docente);
  }
  get(): void {
    const id =this.Id;
    //+this.route.snapshot.paramMap.get('id');
    this.docenteService.get(id)
    .subscribe(hero => this.docentes = hero);
    console.log(this.docentes.lic);
    }
    update(): void {
      this.docenteService.update(this.docentes)
      .subscribe(() => this.goBack());
      }
  delete(): void {
    this.docenteService.delete(this.docentes)
    .subscribe(()=>this.goBack());
  }     
  goBack(): void {
    this.MostrarTd();
    this.getAll();
    //this.location.back();
    }
  MostrarRe():void{
    this.mostrarRestudiantes=true;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarRd():void{
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=true;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarTe(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=true;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarTd(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=true;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEle(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=true;
    this.mostrarHome=false;
  }
  MostrarEld(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=true;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEdd(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=true;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
    this.get();
  }
  MostrarEdd2(id:number){
    
    this.Id=id;
    console.log(this.Id);
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=true;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
    this.get();
  }
  MostrarEde(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=true;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=true;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  ocultarTodo(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=true;
  }
}
