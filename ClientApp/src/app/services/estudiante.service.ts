import { Injectable, Inject } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }
    /** POST: add a new task to the server */
    add(estudiante: Estudiante): Observable<Estudiante> {
      return this.http.post<Estudiante>(this.baseUrl+'api/Estudiante', estudiante, httpOptions).pipe(
        tap((newEstudiante: Estudiante) => this.log(`Estudiante agregado id= ${newEstudiante.id}`)),
        catchError(this.handleErrorAdd<Estudiante>('Error Al Agregar Estudiante'))
      )
    }
  
    /** GET Task from the server */
    getAll():Observable<Estudiante[]>
    {
      return this.http.get<Estudiante[]>(this.baseUrl+'api/Estudiante').pipe(
      tap(/*=>this.log('Se Consulta la información')*/),
      catchError(this.handleError<Estudiante[]>('getAll',[]))
      );
    }
          /** GET task by id. Will 404 if id not found */
          get(id: number): Observable<Estudiante>
          {
            const url = `${this.baseUrl + 'api/Estudiante'}/${id}`;
            return this.http.get<Estudiante>(url).pipe(
            tap(_ => this.log(`fetched estudiante id=${id}`)),
            catchError(this.handleError<Estudiante>(`getEstudiante id=${id}`))
            );
          }
    
          /** PUT: update the Task on the server */
        update (estudiante: Estudiante): Observable<any> {
          const url =`${this.baseUrl + 'api/Estudiante'}/${estudiante.id}`;
          return this.http.put(url, estudiante, httpOptions).pipe(
          tap(_ => this.log(`updated estudiante identificacion=${estudiante.id}`)),
          catchError(this.handleError<any>('estudiante'))
          );
        }
    
        /** DELETE: delete the task from the server */
        delete (estudiante: Estudiante | number): Observable<Estudiante> {
          const id = typeof estudiante === 'number' ? estudiante : estudiante.id;
          const url =`${this.baseUrl + 'api/Estudiante'}/${id}`;
          
          return this.http.delete<Estudiante>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted estudiante id=${id}`)),
          catchError(this.handleError<Estudiante>('deleteestudiante'))
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
      alert(`EstudianteService: ${message}`);
    
  }
}
