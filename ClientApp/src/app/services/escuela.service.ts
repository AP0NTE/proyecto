import { Injectable, Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Escuela } from '../models/escuela';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
  { 
  }
  /** POST: add a new task to the server */
  add(escuela: Escuela): Observable<Escuela> {
    return this.http.post<Escuela>(this.baseUrl+'api/Escuela', escuela, httpOptions).pipe(
      tap((newEscuela: Escuela) => this.log(`Escuela agregado `/*id= ${newEscuela.id}`*/)),
      catchError(this.handleErrorAdd<Escuela>('Error Al Agregar Escuela'))
    )
  }

  /** GET Task from the server */
  getAll():Observable<Escuela[]>
  {
    return this.http.get<Escuela[]>(this.baseUrl+'api/Escuela').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Escuela[]>('getAll',[]))
    );
  }
        /** GET task by id. Will 404 if id not found */
        get(id: number): Observable<Escuela>
        {
          const url = `${this.baseUrl + 'api/Escuela'}/${id}`;
          return this.http.get<Escuela>(url).pipe(
          tap(_ => this.log(`fetched escuela id=${id}`)),
          catchError(this.handleError<Escuela>(`getEscuela id=${id}`))
          );
        }
  
        /** PUT: update the Task on the server */
      update (escuela: Escuela): Observable<any> {
        const url =`${this.baseUrl + 'api/Escuela'}/${escuela.id}`;
        return this.http.put(url, escuela, httpOptions).pipe(
        tap(_ => this.log(`updated escuela identificacion=${escuela.id}`)),
        catchError(this.handleError<any>('escuela'))
        );
      }
  
      /** DELETE: delete the task from the server */
      delete (escuela: Escuela | number): Observable<Escuela> {
        const id = typeof escuela === 'number' ? escuela : escuela.id;
        const url =
        
        `${this.baseUrl + 'api/Escuela'}/${id}`;
        
        return this.http.delete<Escuela>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted escuela id=${id}`)),
        catchError(this.handleError<Escuela>('deleteescuela'))
        );
      }
  

  private handleErrorAdd<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log('Rellene Los Campos Requeridos  * ');
    return of(result as T);
    };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`EscuelaService: ${message}`);
  
}
}
