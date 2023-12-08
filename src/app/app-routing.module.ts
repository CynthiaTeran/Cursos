import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './vistas/presentacion/presentacion.component';
import { EvaluacionComponent } from './vistas/evaluacion/evaluacion.component';

const routes: Routes = [
  { path: 'presentacion/:curso', component: PresentacionComponent },
  { path: 'evaluacion/:curso', component: EvaluacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
