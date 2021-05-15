import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPecasComponent } from './pecas/editar-pecas/editar-pecas.component';

import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';

import { CadastrarPecasComponent } from './pecas/cadastrar-pecas/cadastrar-pecas.component';

const routes: Routes = [
  {path:'', component: ListarPecasComponent},
  {path:"editar/:cod", component:EditarPecasComponent},
  {path:"cadastrar/:cod", component:CadastrarPecasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
