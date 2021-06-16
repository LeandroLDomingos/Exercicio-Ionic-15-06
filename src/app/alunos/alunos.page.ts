import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { Alunos } from '../models/alunos.models'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  alunos: Alunos;
  constructor(public alunosService: AlunosService) { }

  async ngOnInit() {
    let alunos =  await this.alunosService.getAlunos();
    this.alunos = alunos;
    console.log(this.alunos);
  }

}
