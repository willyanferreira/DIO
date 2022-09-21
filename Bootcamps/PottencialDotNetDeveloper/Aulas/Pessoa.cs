using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aulas
{
    public class Pessoa
    {
        public string Nome {get; set;}
        public int Idade {get; set;}
        public void Apresentar()
        {
            Console.WriteLine($"Olá meu nome é {Nome}, eu tenho {Idade} anos");
        }
        // static void Main(string[] args)
        // {
        //     Pessoa p1 = new Pessoa();
        //     p1.Nome = "Will";
        //     p1.Idade = 32;
        //     p1.Apresentar();
        // }
    }
}