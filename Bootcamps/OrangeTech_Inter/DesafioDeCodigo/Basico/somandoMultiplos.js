// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
var soma = 0;
var qtd = N / a

for(let x = 0; x <= qtd; x++){
  soma += a * x
}
 print(soma)