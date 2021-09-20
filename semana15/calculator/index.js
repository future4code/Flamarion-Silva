
const operation = process.argv[2] 
const firstNumber = process.argv[3]
const next = process.argv[4]
/*Logo acima está a maneira como acessamos os parâmetros no nodejs.
Através do process.argv[]. O índice do array informa a posição dos parẫmetros.
Sendo que, o ínidice zero é o diretório onde o próprio node está instalado, o índice um
é o arquivo atual que está sendo executado pelo node e os demais índices são os parâmetros.
Sendo assim, por padrão, os dois primeiros índices já são preenchidos.*/
const red = '\033[31m'



if(operation === 'add'){
	console.log(red+Number(firstNumber + next))
}else if(operation === 'sub'){
	console.log(red+Number(firstNumber - next))
}else if(operation === 'mult'){
	console.log(red+Number(firstNumber * next))
}else if(operation === 'div'){
	console.log(red+Number(firstNumber / next))
}else{
	console.log('Operação inválida!')
}

