export interface Aluno{
  id: number,
  nome: string,
  sobrenome: string,
  email: string,
  ra: string,
  idade: string
}

export interface Alunos{
  alunos: Alunos[];
}
