const fs = require('fs')

const tasks = ['Estudar nodejs', 'Fazer os exercícios',
'Praticar']
tasks.push(process.argv[2])

fs.appendFile('tasks-list_db.txt', process.argv[2], function(err){
	if(err){
		console.log(err)
	}
})

console.log(tasks)