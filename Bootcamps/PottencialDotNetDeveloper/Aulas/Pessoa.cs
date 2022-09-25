using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aulas
{
    public class Pessoa
    {
        private string _nome;
        private int _idade;
        public string Nome 
        {
                get => _nome;
                set
                {
                        if (value == "")
                        {
                                throw new ArgumentException("Você não informou seu nome.");
                        }
                        _nome = value;
                }
        }
        public int Idade 
        {
                get => _idade ;
                set
                {
                        if (value < 0)
                        {
                                throw new ArgumentException("idade não pode ser negativa.");
                        }
                        _idade = value;
                }
        }
        public void Apresentar()
        {
            Console.WriteLine($"Olá meu nome é {Nome}, eu tenho {Idade} anos".ToUpper());
        }

        //MANEIRA DE INSTANCIAR A CLASSE PESSOA NO MESMO ARQUIVO.
        // static void Main(string[] args)
        // {
        //     Pessoa p1 = new Pessoa();
        //     p1.Nome = "Will";
        //     p1.Idade = 32;
        //     p1.Apresentar();
        // }
    }
}