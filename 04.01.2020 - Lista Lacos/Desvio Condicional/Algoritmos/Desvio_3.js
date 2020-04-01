/** Desenvolva um algoritmo que efetue a leitura de um número inteiro 
 * e apresente uma mensagem informando se ele é um número par ou ímpar. */

var numero = prompt("Insira um numero inteiro");

if(numero % 2 == 0){
    console.log("Numero par");
} else {
    console.log("Numero impar");
}