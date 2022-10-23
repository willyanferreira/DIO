let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
  soma = 0;
  for(let i = 0; i < n; i++){
    soma += n - i;
  }
  print(soma);
}

somatorio(n);