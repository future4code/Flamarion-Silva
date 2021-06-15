// ----------------------> Exemplos <---------------------------

console.log('Olá, Lovelace!')

// const primeiroNumero = 10
// const segundoNumero = 20
// const terceiroNumero = 15

// // Soma
// const soma = primeiroNumero + segundoNumero + 30
// console.log(soma) // 60

// // Subtração
// const subtracao = primeiroNumero - segundoNumero - 2
// console.log(subtracao) // -12

// // Multiplicação
// const multiplicacao = primeiroNumero * segundoNumero
// console.log(multiplicacao) // 200

// // Divisão
// const divisao = primeiroNumero / segundoNumero
// console.log(divisao) // 0,5

// // Resto da divisão
// const resto = terceiroNumero % primeiroNumero // 15 % 10
// console.log(resto) // 5

// const a = 7 // impares o resto por 2 é diferente de zero
// const b = 18 // pares o resto por 2 é igual

// const testaMultiplo1 = a % 2 === 0 // verifcação de multiplo de 2
// console.log(testaMultiplo1) // se true é multiplo, se false não é multiplo

// const testaMultiplo2 = b % 2 === 0
// console.log(testaMultiplo2)

// Comparadores
// const primeiroTexto = "19"
// const segundoTexto = "maracuja"

// const primeiroNumero = 19
// const segundoNumero = 19

// // Igualdade
// const igualdade1 = primeiroNumero === primeiroTexto
// // === -> compara igualdade entre valor e tipo
// // ==  -> compara igualdade entre valor

// const igualdade2 = primeiroNumero === segundoNumero
// console.log(igualdade1)
// console.log(igualdade2)

// // Diferença
// const diferenca1 = primeiroNumero !== segundoNumero
// // !== -> compara diferença entre valor e tipo
// // !=  -> compara diferença entre valor

// const diferenca2 = primeiroNumero !== primeiroTexto
// console.log(diferenca1) // false
// console.log(diferenca2) // true

// Maior/igual e menor/igual
// console.log(3 >= 4) // false 
// console.log(1 > 2) // false
// console.log(3 <= 4) // true
// console.log(1 < 2) // true

// console.log(4 >= 4) // true
// console.log(4 > 4) // false

// Operador de negação

// const abobrinha = false
// console.log(!abobrinha)

// ----------------------> Exercicio 1 <---------------------------
// // Item 1
// const soma = 3 + 4
// console.log(soma) // 7

// // Item 2
// const multiplicaEDivide = (3 * 5) / 2
// console.log(multiplicaEDivide) // 7.5

// // Item 3
// const subtraiEMultiplica = (5 - 4) * (-1)
// console.log(subtraiEMultiplica) // -1

// // Item 4
// const resto = 234 % 5
// console.log(resto) // 4


// ----------------------> Exercicio 2 <---------------------------
// const primeiroNumero = 10
// const segundoNumero = 10

// const igualdade = primeiroNumero === segundoNumero
// console.log("O primeiro número é igual ao segundo?", igualdade)

// const diferenca = primeiroNumero !== segundoNumero
// console.log("O primeiro número é diferente do segundo?", diferenca)

// const maior = primeiroNumero > segundoNumero
// console.log("O primeiro número é maior que o segundo?", maior)

// const menor = primeiroNumero < segundoNumero
// console.log("O primeiro número é menor que o segundo?", menor)

// ----------------------> Exercicio 3 <---------------------------
// const a = true
// const b = false
// const c = true

// console.log(a && b) // true && false --> false
// console.log(b && c) // false && true --> false
// console.log(a && c) // true && true --> true
// console.log(a && b && c) // true && false && true --> false

// ----------------------> Exercicio 4 <---------------------------
// const a = true
// const b = false
// const c = true

// console.log(a || b) // true || false --> true
// console.log(b || c) // false || true --> true
// console.log(a || c) // true || true --> true
// console.log(a || b || c) // true || false || true --> true

// ----------------------> Exercicio 5 <---------------------------

const nome = prompt("Qual seu nome?") // texto
const anoNascimento = Number(prompt("Em que ano nasceu?"))
const anoAtual = Number(prompt("Qual o ano atual?"))

console.log("Olá", nome)

const idade = anoAtual - anoNascimento
console.log("Idade:", idade)

console.log("É maior de idade?", idade >= 18)

const idade2050 = 2050 - anoNascimento
console.log("Em 2050 terá", idade2050)



