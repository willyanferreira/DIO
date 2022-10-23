// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
if(resultado % 3 == 0 && resultado % 5 == 0){
   print("FizzBuzz")
}else if(resultado % 5 == 0){
  print("Buzz")
}else if(resultado % 3 == 0){
  print("Fizz")
}else{
  print(resultado)
}
//print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

