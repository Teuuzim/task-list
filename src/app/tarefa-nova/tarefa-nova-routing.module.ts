import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaNovaPage } from './tarefa-nova.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaNovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaNovaPageRoutingModule {}
