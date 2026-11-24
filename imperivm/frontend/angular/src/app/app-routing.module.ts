import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUnidadesComponent } from './lista-unidades/lista-unidades.component';
import { ComparacionComponent } from './comparacion/comparacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/comparacion', pathMatch: 'full' },
  { path: 'unidades', component: ListaUnidadesComponent },
  { path: 'comparacion', component: ComparacionComponent },
  { path: '**', redirectTo: '/unidades' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
