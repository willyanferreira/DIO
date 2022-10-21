// See https://aka.ms/new-console-template for more information
using POO.Models;

Pessoa p1 = new Pessoa();
p1.Nome = "Willyan";
p1.Idade = 33;

// p1.Apresentar();

ContaCorrente c1 = new ContaCorrente(123, 1000);
// c1.Sacar(1289);
// c1.ExibirSaldo();

Aluno a1 = new Aluno();
a1.Nome = "Heitor";
a1.Idade = 4;
a1.Nota = 10;
a1.Apresentar();

Professor fessor1 = new Professor();
fessor1.Nome = "Willyan";
fessor1.Idade = 33;
fessor1.Salario = 1212;
fessor1.Apresentar();