import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaAtualizaPage } from './tarefa-atualiza.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaAtualizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaAtualizaPageRoutingModule {}
