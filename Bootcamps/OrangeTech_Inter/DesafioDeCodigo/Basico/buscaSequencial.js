let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

if(elementos.includes(valor)){
  print(`Achei ${valor} na posicao ${elementos.indexOf(valor)}`);
}else{
  print(`Numero ${valor} nao encontrado!`);
}