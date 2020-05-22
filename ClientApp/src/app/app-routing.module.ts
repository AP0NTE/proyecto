import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminComponent} from './admin/admin.component';
import{LoginComponent}from './login/login.component';
import{RegistrarEstudianteComponent}from'./registrar-estudiante/registrar-estudiante.component';
import{RegistrarDocenteComponent}from'./registrar-docente/registrar-docente.component';
import{EditarDComponent}from './editar-d/editar-d.component';
import{EditarEComponent} from './editar-e/editar-e.component';
import{EliminarDComponent} from './eliminar-d/eliminar-d.component';
import{EliminarEComponent} from './eliminar-e/eliminar-e.component';
import{TablaDComponent} from './tabla-d/tabla-d.component';
import{TablaEComponent} from './tabla-e/tabla-e.component';
import{EstudianteComponent}from './estudiante/estudiante.component';
import{DocenteComponent}from './docente/docente.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent },
  {path:'login',component:LoginComponent},
  {path:'registrarEstudiante',component:RegistrarEstudianteComponent},
  {path:'registrarDocente',component:RegistrarDocenteComponent},
  {path:'editarE',component:EditarEComponent},
  {path:'editarD',component:EditarDComponent},
  {path:'eliminarD',component:EliminarDComponent},
  {path:'eliminarE',component:EliminarEComponent},
  {path:'tablaD',component:TablaDComponent},
  {path:'tablaE',component:TablaEComponent},
  {path:'estudiante',component:EstudianteComponent},
  {path:'docente',component:DocenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

