let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//É uma estrutura de repetição que se repete 5 vezes a instrução dada. É adicionado um valor a cada, somando todos ao final do loop
//O resultado será 10(1+2+3+4)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
	
}

//Serão impressos todos os números da lista maiores que 18
//Se é suficiente, basta retirar a condicional if, que requer todos os números maiores que 18 e deixar apenas o "console.log(numero)"

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Seriam impressas 4 linhas de asteriscos em ordem crescente, a primeira linha com um asteriscos, a segunda com dois e assim por diante

let pets = Number(prompt('Quantos animais de estimação você tem?'))
let qntPets = []

if(pets == 0){
    console.log('Que pena! Você pode adotar um pet!')
}else{
    for(let c = 0; c < pets; c++){
        let nomesPets = prompt('Informe o nome de cada um deles:')
        qntPets.push(nomesPets)
    }
}

console.log(qntPets)

const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

function imprimeArray(){
    for(let c = 0; c < arrayOriginal.length; c++){
        console.log(arrayOriginal[c])
    }
}

imprimeArray()

function arrayDivDez(){
    for(let c = 0; c < arrayOriginal.length; c++){
        console.log(arrayOriginal[c] / 10)
    }
}

arrayDivDez()

function novoArray(){
    const pares = []
    for(let c = 0; c < arrayOriginal.length; c++){
        if(arrayOriginal[c] % 2 === 0){
            pares.push(arrayOriginal[c])
        }
    }
    console.log(pares)
}

novoArray()

function arrayStrings(){
    const strings = []
    for(let c = 0; c < arrayOriginal.length; c++){
        strings.push(`O elemento do index ${c} é: ${arrayOriginal[c]}`)
    }
    for(let i = 0; i < strings.length; i++){
        console.log(strings[i])
    }
}

arrayStrings()

function maiorEMenor(){
    let maior = 0
    let menor = 0

    for(let c = 0; c < arrayOriginal.length; c++){
        if(c == 0){
            maior = arrayOriginal[c]
            menor = arrayOriginal[c]
        }else if(arrayOriginal[c] < menor){
            menor = arrayOriginal[c]
        }else if(arrayOriginal[c] > maior){
            maior = arrayOriginal[c]
        }
    }
    
    console.log(`O maior número é ${maior}`)
    console.log(`O menor número é ${menor}`)
}

maiorEMenor()
