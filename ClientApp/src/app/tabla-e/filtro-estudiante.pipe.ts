import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante }from'../models/estudiante';
@Pipe({
  name: 'filtroEstudiante'
})
export class FiltroEstudiantePipe implements PipeTransform {
  transform(estudiante: Estudiante[],search:string): any {
    if(search==null)return estudiante;
    return estudiante.filter(p=>p.nombre.toLowerCase()
    .indexOf(search.toLowerCase())!==-1);
  }
}
