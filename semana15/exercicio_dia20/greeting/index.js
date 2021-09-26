const fs = require('fs')
const name = process.argv[2]
const age = Number(process.argv[3])
const red = '\033[31m'
const result = `${red} Olá ${name}! Você tem ${age} anos, em 7 anos você terá ${age+7}`

if(name === ''){
	console.log('Algum dos parâmetros, ou ambos, não forma adicionados!')
}else{
	console.log(result)
}

fs.appendFile('greeting_db.txt', result, function(err){
	if(err){
		console.log(err)
	}
})

