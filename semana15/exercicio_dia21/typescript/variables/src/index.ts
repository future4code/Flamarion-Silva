const meuNumero: number = 25
const minhaString: string | number = 25


enum cores {
	anil = 'anil',
	azul = 'azul',
	violeta = 'violeta',
	verde = 'verde',
	amarelo = 'amarelo',
	laranja = 'laranja',
	vermelho = 'vermelho'
}

type Pessoa = {
	nome: string,
	idade: number,
	corFavorita: cores
}


const joao: Pessoa = {
	nome: 'João',
	idade: 25,
	corFavorita: cores.azul
}

const maria: Pessoa = {
	nome: 'Maria',
	idade: 30,
	corFavorita: cores.vermelho
}

const pedro: Pessoa = {
	nome: 'Pedro',
	idade: 15,
	corFavorita: cores.verde
}

console.log(joao)
console.log(pedro)
console.log(maria)

/*
No momento da transpilação a mensagem "error TS2322: Type 'number' is not assignable to type 'string'." é exibe indicando que o valor da variavel não é compatível com o se tipo.
Para que a variável meuNumero também aceite outros valores além de números basta adicionar o caractere | entre os tipos distintos de variáveis.
*/
