/** Elaborar um programa que apresente como resultado, o valor de uma potência de uma base 
 * qualquer, elevado a um expoente qualquer, mas sem a utilização do operador exponenciação. */

var base = prompt("Insira a base: ");
var expoente = prompt("Insira o expoente: ");

base = parseInt(base);
expoente = parseInt(expoente);

if(expoente==1){
    console.log("O resultado da exponenciação é " + base);
} else {
    var contador = 1;
    var resultado = base;

    do {
        contador++;
        resultado *= base
    } while(contador != expoente);

    console.log("O resultado da exponenciação é " + resultado);
}

