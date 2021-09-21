type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/*
a. Para gerar um arquivo javascript à partir deste e digito o comando tsc na pasta raiz no terminal.
b. Não o processo não seria diferente, pois o comando tsc foi instalado de forma global.
c. Ainda não conheço uma forma de transpilar vários arquivos de uma só vez
*/