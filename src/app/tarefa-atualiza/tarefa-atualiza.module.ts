import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaAtualizaPageRoutingModule } from './tarefa-atualiza-routing.module';

import { TarefaAtualizaPage } from './tarefa-atualiza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaAtualizaPageRoutingModule
  ],
  declarations: [TarefaAtualizaPage]
})
export class TarefaAtualizaPageModule {}
