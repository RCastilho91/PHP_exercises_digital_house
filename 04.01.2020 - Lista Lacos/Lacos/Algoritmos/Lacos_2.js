/** Elaborar um programa que apresente os resultados da 
 * soma e da média aritmética dos valores pares, situados na faixa numérica de 50 a 70. */

listaPares = [];
limiteInferior = 50;
limiteSuperior = 70;

for(var x = limiteInferior; x < limiteSuperior; x++){
    if( x % 2 == 0){
        listaPares.push(x);
    }
}

var somaTotal = listaPares.reduce((a, b) => a + b, 0)
var mediaGeral = somaTotal / listaPares.length;

console.log(listaPares);
console.log("A soma dos pares é: " + somaTotal);
console.log("A média dos pares é: " + mediaGeral);