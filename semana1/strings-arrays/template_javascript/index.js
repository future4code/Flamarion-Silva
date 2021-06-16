let array
console.log('a. ', array)
//Será impresso undefined

array = null
console.log('b. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11

let i = 0
console.log('d. ', array[i])
//3

array[i+1] = 19
console.log('e. ', array)
//Array(11)

const valor = array[i+6]
console.log('f. ', valor)
//9

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27

const email = prompt('Digite seu email:')
const nome = prompt('Digite seu nome:')

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(a) ${nome}`)

const comidas = ['feijão', 'carne', 'pizza', 'coxinha', 'baurú']

console.log('Essas são minhas comidas preferidas:\n',comidas.join('\n'))

const comidaUsuario = prompt('Qual sua comida preferida:')
const retira = comidas.splice(1, 1, comidaUsuario)
console.log(comidas)

const listaDeTarefas = []
const tarefa1 = prompt('Indique sua primeira tarefa diária:')
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt('Segunda tarefa:')
listaDeTarefas.push(tarefa2)
const tarefa3 = prompt('Terceira tarefa:')
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const tarefaRealizada = prompt('Diga o número da tarefa que você cumpriu(entre 0 e 2):')
const removida = listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)

