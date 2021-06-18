function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a) No primeiro console será impresoo o valor 10 e no segundo 50
//b) Caso retiresse os consoles nada seria impresso, ainda que a função fosse executada

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a) A função pede que o usuário digite um texto. A sua utilidade é colocar todo texto em letras minúsculas e verficar se existe a palavra cenoura, retornando verdadeiro ou falso para isso
//b) na frase "Eu gosto cenoura" retornará true, pois inclue a palavra
//b) em "CENOURA é bom pra vista" retornará true, pois o método toLowerCase() poe a palavra em minúscula
//b) em "Cenouras crescem na terra" retornará true, pois a primeira letra também irá para minúscula e apesar de ter uma letra à mais(s) ainda possue todas as letras requeridas pelo método icludes

function sobreMim(){
	let nome = 'Flamarion'
	let idade = 37
	let cidade = 'Salvador'
	let estudaOQue = 'Webfullstack na Labenu'
	
	console.log(`Olá me chamo ${nome}, tenho ${idade}, moro em ${cidade} e sou estudante de ${estudaOQue}`)
}

sobreMim()

function sobreVoce(nome, idade, endereco, profissao){
	console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}

sobreVoce('Linus Torvalds', 51, 'Helsinque', 'engenheiro de software')

function soma(num1, num2){
	const operacao = num1 + num2
	
	return operacao
}

console.log(soma(5, 8))

function maiorQ(n1, n2){
	const resultado = n1 >= n2
	
	return resultado
}

console.log(maiorQ(4, 4))
console.log(maiorQ(6, 9))
console.log(maiorQ(14, 4))

function ehPar(n){
	const par = n % 2 == 0
	
	return par
}

console.log(ehPar(2))
console.log(ehPar(5))

function cumprimentoECaixaAlta(msg){
	const tamanho = msg.length
	const maiuscula = msg.toUpperCase()
	
	console.log(`O tamanho da mensagem é ${tamanho} e sua versão em maiúsculas é ${maiuscula}`)
}

cumprimentoECaixaAlta('Testando erros pra vê se acerta')

n1 = Number(prompt('Digite um número:'))
n2 = Number(prompt('Outro número:'))

console.log(`Números inseridos: ${n1} e ${n2}`)

function adicao(n1, n2){	
	console.log(`Soma: ${n1 + n2}`)	
	
}
adicao(n1, n2)

function subtracao(n1, n2){	
	console.log(`Diferença: ${n1 - n2}`)	
	
}
subtracao(n1, n2)

function multiplica(n1, n2){
	console.log(`Multiplicação: ${n1 * n2}`)
}
multiplica(n1, n2)

function divide(n1, n2){
	console.log(`Divisão: ${n1 / n2}`)
}
divide(n1, n2)
