import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TarefaService } from '../services/tarefa.service';
import { ITarefa, createITarefa } from '../../models/tarefa-model';
@Component({
 selector: 'app-tarefa-nova',
 templateUrl: './tarefa-nova.page.html',
 styleUrls: ['./tarefa-nova.page.scss'],
standalone: false,
})
export class TarefaNovaPage implements OnInit {
 public categorias: string[] = [ ];
 public categoriaSelecionada: string = '';
 public categoriaIndice: number = -1;
 public tarefa: ITarefa = createITarefa();
 constructor(private navCtrl: NavController,
 private tarefaServ: TarefaService) { }
 ngOnInit(): void {
 this.tarefa.prioridade = "alto";
 this.tarefa.data = new Date().toISOString();
 this.categorias = this.tarefaServ.getCategorias();
 }
 public salvar() {
 this.tarefa.categoria = this.categoriaSelecionada;
 if (this.tarefa.nome && this.tarefa.data && this.tarefa.categoria) {

 console.log('Salvar', this.tarefa);
 this.tarefaServ.add(this.tarefa);
 this.navCtrl.navigateRoot('/home');
 } else {
 console.log('Não é possível salvar uma tarefa vazia');
 }
 }
 public selecionarCategoria(index: number) {
 this.categoriaSelecionada = this.categorias[index];
 this.categoriaIndice = index;
 console.log(this.categoriaSelecionada);
 }
}