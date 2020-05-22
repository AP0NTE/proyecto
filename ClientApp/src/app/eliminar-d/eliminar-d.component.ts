import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../services/docente.service';
import {Docente} from '../models/docente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-eliminar-d',
  templateUrl: './eliminar-d.component.html',
  styleUrls: ['./eliminar-d.component.css']
})
export class EliminarDComponent implements OnInit {
  docentes:Docente;
  sdocente:string;
  docente :Docente[];
  constructor(private docenteService:DocenteService,private route :ActivatedRoute,private location :Location) {
  
   }
  
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.docenteService.getAll().subscribe(docente=>this.docente=docente);
  }
  cargarDatos(id){
    console.log(this.docentes);
  }
  get(): void {
    const id =
    +this.route.snapshot.paramMap.get('id');
    this.docenteService.get(id)
    .subscribe(hero => this.docentes = hero);
    }
  delete(): void {
    this.docenteService.delete(this.docentes)
    .subscribe(()=>this.goBack());
  }     
  goBack(): void {
    this.location.back();
    }
}