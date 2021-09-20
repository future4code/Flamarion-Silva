const countries = require('./countries')

const name = process.argv[2] || ''

const result = countries.filter(country=>{
	return country.name.toLowerCase().includes(name.toLowerCase())
})
console.table(result)