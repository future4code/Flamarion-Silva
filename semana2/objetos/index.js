const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//Matheus Nachtergaele
//Virginia Cavendish
//{canal: "Globo", horario: "14h"}

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

/*
index.js:31 {nome: "Juca", idade: 3, raca: "SRD"}
index.js:32 {nome: "Juba", idade: 3, raca: "SRD"}
index.js:33 {nome: "Jubo", idade: 3, raca: "SRD"}
Permite inserir um objeto dentro de outro objeto
*/

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//false: Foi impresso devido à esse ser o valor definido no objeto
//undefined: Foi impresso porque a propriedade altura não está definida

const eu = {
	nome: 'Flamarion',
	apelido: ['Fran', 'OZ', 'Pato']
}

const euDeNovo = {...eu, apelido: ['Dipreto', 'Negão', 'Maluco Beleza']}

function nomeEApelido(objeto){
	console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}

nomeEApelido(euDeNovo)

const obj = {
	nome: prompt('Informe o seu nome:'),
	idade: Number(prompt('Informe sua idade:')),
	profissao: prompt('Informe sua profissão:')
}


function dadosDosObjetos(prop){
	let valNome = prop.nome
	let caracNome = prop.nome.length
	let valIdade = prop.idade
	let valProfissao = prop.profissao
	let caracProfissao = prop.profissao.length
	
	return [valNome, caracNome, valIdade, valProfissao, caracProfissao]
}

console.log(dadosDosObjetos(obj))

//Neste caso não entendi porque a criação de dois objetos com as mesmas propriedades e como a função trataria esses dois objetos como parâmetros, por isso deixei apenas um

const carrinho = []
const fruta1 = {
	nome: 'maçã',
	disponibilidade: true
}
const fruta2 = {
	nome: 'uva',
	disponibilidade: true
}
const fruta3 = {
	nome: 'laranja',
	disponibilidade: true
}

function frutas(fruta){
	let arr = carrinho.push(fruta)	
}

frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

console.log(carrinho)

