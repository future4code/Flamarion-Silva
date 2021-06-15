let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

//Será impresso no primeiro console o valor 10 e no segundo o valor 10 e o valor 5

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

//Será impresso os valores 10 10 10

let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let diaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${diaria/horasDeTrabalho} por hora`)

//Exercícios de escrita de código

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

//Os resultados não foram impressos, pois as variáveis estão sem valor atribuído. E é o valor que determina o tipo da variável

nome = prompt('Qual o seu nome: ')
idade = prompt('E a sua idade: ')
alert('Olá '+nome+', você tem '+idade+' anos')

console.log(typeof nome)
console.log(typeof idade)

//Agora com o valor das variáveis atribuido pelo prompt é possível se ter o resultado dos seus tipos, que são ambos string

let tempo = prompt('Está chovendo aí na sua cidade?')
let corRoupa = prompt('Você está vestindo vermelho')
let fome = prompt('Você est´a com fome?')

console.log('Está chovendo aí na sua cidade? ', tempo)
console.log('Você está vestindo vermelho? ', corRoupa)
console.log('Você está com fome? ', fome)

let a = 25
let b = 10
let c = a
a = b
b = c
console.log(a, b)
