import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TarefaService } from '../services/tarefa.service';
import { ITarefa, createITarefa } from '../../models/tarefa-model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tarefa-atualiza',
  templateUrl: './tarefa-atualiza.page.html',
  styleUrls: ['./tarefa-atualiza.page.scss'],
  standalone: false,
})
export class TarefaAtualizaPage implements OnInit {
  public categorias: string[] = [];
  public categoriaSelecionada: string = '';
  public categoriaIndice: number = -1;
  public tarefa: ITarefa = createITarefa();
  constructor(
    private rotaAtiva: ActivatedRoute,
    private navCtrl: NavController,
    private tarefaServ: TarefaService
  ) {}
  ngOnInit(): void {
    this.categorias = this.tarefaServ.getCategorias();
    const id: string = this.rotaAtiva.snapshot.paramMap.get('id') || '0';
    console.log(id);
    this.tarefaServ.get(id).subscribe((tarefa) => {
      this.tarefa = tarefa;
      this.categoriaSelecionada = this.tarefa.categoria;
      this.categoriaIndice = this.categorias.findIndex(
        (obj) => obj === this.categoriaSelecionada
      );
    });

    this.categoriaSelecionada = this.tarefa.categoria;
    this.categoriaIndice = this.categorias.findIndex(
      (obj) => obj === this.categoriaSelecionada
    );
    console.log('Tarefa edit', this.tarefa);
  }
  public atualizar() {
    this.tarefa.categoria = this.categoriaSelecionada;
    if (this.tarefa.nome && this.tarefa.data && this.tarefa.categoria) {
      console.log('Salvar', this.tarefa);
      this.tarefaServ.update(this.tarefa);
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
