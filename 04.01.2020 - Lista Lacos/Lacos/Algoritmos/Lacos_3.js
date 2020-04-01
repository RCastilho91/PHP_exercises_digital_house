/** Elaborar um programa que efetue a leitura de valores positivos inteiros, 
 * até que um valor negativo seja informado. Ao final devem ser apresentados o maior, 
 * o menor e a média dos valores lidos. */

var lista = [];
let numero = "";
let checker = false;

while(!checker){
    numero = prompt("Insira um numero inteiro");
    numero = parseInt(numero);

    if(numero < 0){
        checker = true;
    } else {
        checker = false;
        lista.push(numero);
    }
}

var somaTotal = lista.reduce((a, b) => a + b, 0);
var mediaGeral = somaTotal / lista.length;
var maximo = Math.max.apply(Math, lista);
var minimo = Math.min.apply(Math, lista);

console.log(lista);
console.log("Maximo: " + maximo);
console.log("Minimo: " + minimo);
console.log("Media geral: " + mediaGeral);