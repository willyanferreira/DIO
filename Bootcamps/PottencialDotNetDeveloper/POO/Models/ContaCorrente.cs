using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POO.Models
{
    public class ContaCorrente
    {
        public ContaCorrente(int numConta, decimal saldoInicial)
        {
            NumeroConta = numConta;
            Saldo = saldoInicial;
        }

        public int NumeroConta { get; set; }
        private decimal Saldo;

        public void Sacar(decimal valor)
        {
            if (valor <= Saldo)
            {
                Saldo -= valor;
            }
            else
            {
                Console.WriteLine("Operação cancelada. Valor do saque maior do que o saldo disponível.");
            }
        }

        public void ExibirSaldo()
        {
            Console.WriteLine($"Saldo atual: {Saldo}");
        }
    }
}