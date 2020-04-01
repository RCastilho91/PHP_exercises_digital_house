/** Desenvolva um algoritmo que efetue a leitura de 3 valores, identifique se estes valores são válidos 
 * para formar um triângulo, em caso negativo deve informar ao usuário por meio de uma mensagem, 
 * caso positivo, deve informar ao usuário por meio de uma mensagem, que tipo de triângulo os 
 * valores/lados formam. */

let checkA = (ladoA, ladoB, ladoC) => {
    if(Math.abs(ladoB - ladoC) < ladoA && ladoA < (ladoB + ladoC)){
        return true;
    } else {
        return false;
    }
}

let checkB = (ladoA, ladoB, ladoC) => {
    if(Math.abs(ladoA - ladoC) < ladoB && ladoB < (ladoA + ladoC)){
        return true;
    } else {
        return false;
    }
}

let checkC = (ladoA, ladoB, ladoC) => {
    if(Math.abs(ladoA - ladoB) < ladoC && ladoC < (ladoA + ladoB)){
        return true;
    } else {
        return false;
    }
}

var ladoA = prompt("Insira um inteiro para o primeiro lado");
var ladoB = prompt("Insira um inteiro para o segundo lado");
var ladoC = prompt("Insira um inteiro para o terceiro lado");

checkA(ladoA, ladoB, ladoC);
checkB(ladoA, ladoB, ladoC);
checkC(ladoA, ladoB, ladoC);

if(checkA || checkB || checkC == false){
    console.log("Dimensoes invalidas para confeccionar um triangulo");
} else {
    if(ladoA == ladoB == ladoC){
        console.log("Triangulo equilatero");
    } else if(ladoA != ladoB != ladoC){
        console.log("Triangulo escaleno");
    } else {
        console.log("Triangulo isosceles");
    }
}
