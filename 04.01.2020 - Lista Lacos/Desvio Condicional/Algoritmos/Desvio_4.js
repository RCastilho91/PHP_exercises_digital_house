/** Elabore um algoritmo que efetue a leitura de 5 números inteiros e apresente o menor e o maior 
 * número lido. Não é permitido fazer ordenação. */

var lista = [];
var i = 0;

while(i<5){
    let numero = prompt("Insira um numero inteiro");
    numero = parseInt(numero);
    lista.push(numero);
    i++
}

var maximo = Math.max.apply(Math, lista);
var minimo = Math.min.apply(Math, lista);

console.log(lista);
console.log("Maximo:" + maximo);
console.log("Minimo:" + minimo);