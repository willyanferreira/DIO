using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POO.Models
{
    public class Aluno : Pessoa // para fazer uma classe herdar de outra
    {
        public double Nota { get; set; }

        public override void Apresentar()
        {
            Console.WriteLine($"O aluno {Nome} é nota {Nota}");
        }
    }
}