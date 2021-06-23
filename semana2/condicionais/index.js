const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//O código verifica se um número é par ou não
//A mensagem "Passou no teste" é inserida quando o número é par
//"Não passou no teste" vai para quando o número for impar

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Indica o preço da fruta informada pelo cliente
//O preço da fruta maçã é R$ 2.25
//A mensagem imprensa seria que o valor da fruta Pêra é 5 e não 5.5, pois sem break o código segue para próxima instrução

const num = Number(prompt("Digite o primeiro número."))

if(num > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

//console.log(mensagem)

//É uma entrada de dados pedindo que o usuário informe um número
//Se o número for 10 a mensagem será "Esse número passou no teste", caso fosse -10 não aconteceria nada, pois não há um else caso a primeira instrução da condicional não for atendida
//Importante reaçaltar que a variável mensagem do console.log() não está definida, já que a variável de mesmo nome só está definida no escopo da condicional if

function podeDirigir(){
    let idade = Number(prompt('Informe sua idade:'))
    
    if(idade >= 18){
        console.log('Você pode dirigir')
    }else{
        console.log('Você não pode dirigir')
    }
}

podeDirigir()

function turnoAula(){
    let turno = prompt('Em que turno você estuda\n[M] Matutino\n[V] Vespertino\n[N] Noturno').toUpperCase()
    
    if(turno == 'M'){
        console.log('Bom dia!')
    }else if(turno == 'V'){
        console.log('Boa tarde!')
    }else{
        console.log('Boa noite!')
    }
}

turnoAula()

function turnoAulaReplay(){
    let turno = prompt('Em que turno você estuda\n[M] Matutino\n[V] Vespertino\n[N] Noturno').toUpperCase()
    
    switch(turno){
        case 'M':
            console.log('Bom dia!')
            break
        case 'V':
            console.log('Boa tarde!')
            break
        case 'N':
            console.log('Boa noite!')
            break
        
    }
}

turnoAulaReplay()

function verFilme(){
    let genero = prompt('Qual o gênero do filme?').toUpperCase()
    let preco = prompt('Qual valor do ingresso?')
    
    if(genero === 'FANTASIA' && preco <= 15){
        console.log('Bom filme!')
    }else{
        console.log('Escolha outro filme :(')
    }
}

verFilme()
