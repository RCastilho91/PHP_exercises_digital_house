/** Elabore um algoritmo que efetue a leitura de números inteiros e apresente 
 * uma mensagem informando se os valores lidos estão dentro ou fora da faixa de 0 a 9. */

var numero = window.prompt("Insira um numero");

if(numero>=0){
    if(numero<=9){
        console.log("Dentro da faixa 0-9");
    } else {
        console.log("Fora da faixa 0-9");
    }
} else {
    console.log("Fora da faixa 0-9");
}

