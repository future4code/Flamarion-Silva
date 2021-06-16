const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//Resultado é false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
//Resultado é false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//Resultado é true

console.log("d. ", typeof resultado)
//Resultado é boolean

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
/*Será impresso a concatenção dos dois números pois o valor do prompt, ainda que sejam números é strings,
neste caso é preciso o usar o método Number para convertê-los em valores númericos. Como no exemplo abaixo */

let primeiroNumero1 = Number(prompt("Digite um numero!"))
let segundoNumero1 = Number(prompt("Digite outro numero!"))

const soma1 = primeiroNumero1 + segundoNumero1

console.log(soma1)

let voce = Number(prompt('Digite a sua idade: '))
let melhorAmigo = Number(prompt('A idade do seu melhor amigo(a): '))
let maior = voce > melhorAmigo
let diferenca = voce - melhorAmigo

console.log('Sua idade é maior do que a do seu melhor amigo(a)?', maior)
console.log('Diferença de idade é', diferenca)

let par = Number(prompt('Digite um número par: '))
let resto = par % 2

console.log('O resto da divisão do seu número por 2 é', resto)
//O resto da divisão sempre será zero, pois qualquer número par dividio por 2 resulta em duas metades iguais sem resto
//Com um úmero impar sobrará um restante, pois números impares não podem ser dividido em metades 

let idade = Number(prompt('Digite a sua idade:'))
let meses = idade * 12
let dias = idade * 365
let horas = idade * (365 * 24)

console.log('Sua idade em meses é', meses)
console.log('Sua idade em dias é', dias)
console.log('Sua idade em horas é', horas)

let primeiro = Number(prompt('Digite um número:'))
let segundo = Number(prompt('Outro número:'))

console.log('O primeiro número é maior que o segundo?', primeiro > segundo)
console.log('O primeiro número é igual ao segundo?', primeiro === segundo)
console.log('O primeiro número é divisível pelo segundo?', primeiro % segundo == 0)
console.log('O segundo número é divisível pelo primeiro?', segundo % primeiro == 0)