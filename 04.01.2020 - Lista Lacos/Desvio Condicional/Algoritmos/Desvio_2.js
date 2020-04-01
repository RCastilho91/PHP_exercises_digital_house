/** Elabore um algoritmo que efetue a leitura de um número inteiro e apresente uma 
 * mensagem informando se o valor lido é negativo ou se está entre 0 e 100 ou se é maior que 100. */

 var numero = prompt("Insira um numero inteiro");

 if(numero<0){
    console.log("Numero negativo");
 } else if(numero<=100) {
    console.log("Numero entre 0 e 100");
 } else {
     console.log("Numero maior do que 100");
 }