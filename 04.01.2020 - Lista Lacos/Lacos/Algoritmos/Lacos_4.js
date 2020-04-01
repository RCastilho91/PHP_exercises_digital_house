/** Elaborar um programa que apresente com resultado o inteiro da divisão de dois números quaisquer.
 * Para este algoritmo, não se deve em hipótese alguma utilizar o conceito do operador DIV.
 * Utilize o conceito de laço. */

var numerador = prompt('Insira o numerador')
var denominador = prompt('Insira o denominador')

numerador = parseInt(numerador)
denominador = parseInt(denominador)

if (denominador > numerador) {
console.log('A divisão inteira é 0')
}

if (denominador == numerador) {
console.log('A divisão inteira é 1')
}

let contador = 1
let incremental = denominador

while (incremental <= numerador) {
  if (incremental > numerador) {
      contador--
      console.log(
      'A divisão inteira de ' +
          numerador +
          ' por ' +
          denominador +
          ' é ' +
          contador
      )
      break;
  } else if (incremental == numerador) {
      console.log(
      'A divisão inteira de ' +
          numerador +
          ' por ' +
          denominador +
          ' é ' +
          contador
      )
      break;
  } else {
      incremental += denominador
      contador++
  }
}