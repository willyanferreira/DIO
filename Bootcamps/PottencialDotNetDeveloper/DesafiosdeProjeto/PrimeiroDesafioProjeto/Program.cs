// 1° DESAFIO DE PROJETO 2/3 22/09/22

/*
Desafio
Paulinho tem em suas mãos um novo problema. Agora a sua professora lhe pediu que construísse um programa para verificar, à partir de dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.

Entrada
A entrada consiste de vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste consiste de dois valores A e B maiores que zero, cada um deles podendo ter até 1000 dígitos.

Saída
Para cada caso de entrada imprima uma mensagem indicando se o segundo valor encaixa no primeiro valor, confome exemplo abaixo.
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesafiosdeProjeto.PrimeiroDesafioPojeto
{
    public class PrimeiroDesafioPojeto
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Digite a quantidade de testes que serão executados");
            // int qt = Convert.ToInt32(Console.ReadLine());

            // Console.WriteLine("Digite um número inteiro positivo");
            // string v = Console.ReadLine();
            // string s = "Q saco";
            
            // string a = Convert.ToString(v[0]);
            // string b = Convert.ToString(v[v.Length - 1]);

            // Console.WriteLine(a2);
            // Console.WriteLine("O primeiro n digitado foi: " + a1 + " " + "O segundo n° digitado foi: " + a2);
            // Array.Reverse(v);

            // Console.WriteLine("o número digitado foi: " + s);
            // Console.WriteLine("A quantidade de números digitados é: " + s.Length);
            // Console.WriteLine("O último número digitado foi: " + s[s.Length - 1]);

            // for (int x = 0; x < qt; x++)
            // {
            //     string a = Convert.ToString(v[Length - 1]);
            //     string b = Convert.ToString(v[x]);

            //     if (a != b)
            //         Console.WriteLine("nao encaixa");
            //     else if (a == b)
            //         Console.WriteLine("encaixa");
            //     else
            //         Console.WriteLine("nao encaixa");
            // }



            //Resolução do desafio, mas n é meu códgio, porém, funciona. Prefiro oq eu fiz, porém n roda.
            //Continuar estudando para adquirir mais conhecimento.    
            int n = int.Parse(Console.ReadLine());
            string[] v;
            for (int i = 0; i < n; i++)
            {
                v = Console.ReadLine().Split(" ");
                string a = v[0];
                string b = v[1];
                if (b.Length > a.Length)
                    Console.WriteLine("nao encaixa");
                else if (a.EndsWith(b))
                    Console.WriteLine("encaixa");
                else
                Console.WriteLine("nao encaixa");
            }
        }
    }
}
