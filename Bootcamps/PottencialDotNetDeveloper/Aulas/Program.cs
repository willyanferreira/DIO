// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Obrigado SENHOR!");

// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;

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
p1.Nome = "willyan"; //Console.ReadLine();
p1.Idade = 32;
p1.Apresentar();

// Console.WriteLine("Tô aqui!");