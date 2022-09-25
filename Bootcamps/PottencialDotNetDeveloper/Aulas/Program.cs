// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Obrigado SENHOR!");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// namespace Aulas
// {
//     public class Pessoa
//     {
//         public string Nome {get; set;}
//         public int Idade {get; set;}
//         public void Apresentar()
//         {
//             Console.WriteLine($"Olá meu nome é {Nome}, eu tenho {Idade} anos e irei conseguir ser um profissional de T.I em nome de Jesus.");
//         }
//         // static void Main(string[] args)
//         // {
//         //     Pessoa p1 = new Pessoa();
//         //     p1.Nome = "Willyan";
//         //     p1.Idade = 32;
//         //     p1.Apresentar();
//         // }
//     }
// }


// INSTANCIANDO A CLASSE CRIADA EM OUTRO ARQUIVO
using Aulas;

Pessoa p1 = new Pessoa();
p1.Nome = "Willlyan"; //Console.ReadLine();
p1.Idade = 32;
// p1.Sobrenome = "Soares";
// p1.Apresentar();

// Console.WriteLine("Tô aqui!");

// int[] MeuArray = new int[5];
// MeuArray[0] = 1;
// MeuArray[1] = 2;
// MeuArray[2] = 3;
// MeuArray[3] = 4;
// MeuArray[4] = 5;

// foreach (int x in MeuArray)
// {
//     Console.WriteLine(x);   
// }

Pessoa p2 = new Pessoa();
p2.Nome = "Raquel";
p2.Sobrenome = "Soares";

Pessoa p3 = new Pessoa();
p3.Nome = "Heitor";
p3.Sobrenome = "Ferreira";

Pessoa p4 = new Pessoa();
p4.Nome = "Amaya";
p4.Sobrenome = "Ferreira";

Curso c1 = new Curso();
c1.Nome = "Inglês";
c1.Alunos = new List<Pessoa>();

c1.AdicionarAluno(p1);
c1.AdicionarAluno(p2);
c1.AdicionarAluno(p3);
c1.AdicionarAluno(p4);
c1.ListarAlunos();
