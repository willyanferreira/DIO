// See https://aka.ms/new-console-template for more information
using POO.Models;

Pessoa p1 = new Pessoa();
p1.Nome = "Willyan";
p1.Idade = 33;

// p1.Apresentar();

ContaCorrente c1 = new ContaCorrente(123, 1000);
c1.Sacar(1289);
c1.ExibirSaldo();