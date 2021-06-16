import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Aluno, Alunos} from '../models/alunos.models'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) {

  }
  async getAlunos() {
    let alunos = await this.http.get<Alunos>("./assets/alunos.json").toPromise();
    return alunos;
  }
}
