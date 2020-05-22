import { Pipe, PipeTransform } from '@angular/core';
import {Docente}from'./models/docente';

@Pipe({
  name: 'pipefiltroPersona'
})
export class PipefiltroPersonaPipe implements PipeTransform {

  transform(docente: Docente[],search:string): any {
    if(search==null)return docente;
    return docente.filter(p=>p.nombre.toLowerCase()
    .indexOf(search.toLowerCase())!==-1);
  }

}
