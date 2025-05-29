import {
  collectionData,
  query,
  getDocs,
  deleteDoc,
  DocumentData,
  docSnapshots
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Firestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { type ITarefa, createITarefa } from '../../models/tarefa-model';
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor(public firestore: Firestore) {}
  private categorias: string[] = ['domestico', 'pessoal', 'trabalho'];
  private tarefas: ITarefa[] = [];

  public getCategorias(): string[] {
    return this.categorias;
  }
  public getAll(): Observable<ITarefa[]> {
    const tCollection = collection(this.firestore, 'tarefas');
    return collectionData(tCollection, { idField: 'id' }).pipe(
      map((tarefas) => tarefas as ITarefa[])
    );
  }
  public get(id: string): Observable<ITarefa> {
    const document = doc(this.firestore, 'tarefas', id);
    return docSnapshots(document).pipe(
      map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as ITarefa;
      })
    );
  }
  public async add(novaTarefa: ITarefa): Promise<ITarefa> {
    const uid: string = Date.now().toString(16);

    novaTarefa.id = uid;

    const docRef = await addDoc(collection(this.firestore, 'tarefas'), {
      nome: novaTarefa.nome,
      prioridade: novaTarefa.prioridade,
      data: novaTarefa.data,
      categoria: novaTarefa.categoria,
    });

    console.log('Documento salvo com o ID: ', docRef.id);

    console.log('Salvar --> novaTarefa', novaTarefa);
    this.tarefas.push(novaTarefa);
    return this.tarefas[this.tarefas.length - 1];
  }
  public getIndex(id: string): number {
    const index = this.tarefas.findIndex((obj) => {
      return obj.id === id;
    });
    return index;
  }
  public update(tarefa: ITarefa): ITarefa {
    const index = this.getIndex(tarefa.id);
    const document = doc(this.firestore, 'tarefas', tarefa?.id);
    const { id, ...data } = tarefa;
    setDoc(document, data);
    if (index >= 0) {
      this.tarefas[index] = tarefa;
      return this.tarefas[index];
    } else {
      return createITarefa();
    }
  }
  public delete(id: string): number {
    const index = this.getIndex(id);
    const document = doc(this.firestore, 'tarefas', id);
    deleteDoc(document);
    if (index >= 0) {
      this.tarefas.splice(index, 1);
    }
    return index;
  }
}
