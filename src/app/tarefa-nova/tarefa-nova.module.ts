import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaNovaPageRoutingModule } from './tarefa-nova-routing.module';

import { TarefaNovaPage } from './tarefa-nova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaNovaPageRoutingModule
  ],
  declarations: [TarefaNovaPage]
})
export class TarefaNovaPageModule {}
