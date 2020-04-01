/** Elaborar um programa que apresente com resultado, 
 * o valor da fatorial dos valores ímpares situados na faixa numéricas de 1 a 10. */

let fatorial = (valor) => {

    fatorial = valor;

    for(var x = fatorial -1; x>1; x--){
        fatorial *= x;
    }
    console.log("Fatorial de " + valor + " é " + fatorial);
}

let limiteInferior = 1;
let limiteSuperior = 10;
var numerosImpares = [];

for(var i = limiteInferior; i < limiteSuperior;i++){
    if(i % 2 > 0){
        numerosImpares.push(i);
    }
}

numerosImpares.forEach(fatorial);