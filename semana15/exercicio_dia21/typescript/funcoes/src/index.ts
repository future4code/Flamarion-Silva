/*function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}*/

/*
a. A entrada da função é o parâmetro números do tipo array, a saída é o retorno estatísticas do tipo object, que é o maior e o menor número do array e a média aritmética entre seus elementos.
b. A variável numerosOrdenados do tipo function é o resultado da ordenação dos elementos do array feita pelo método sort.
A variável do tipo number soma tem o valor da soma de todos os elementos do array feitas pelo método for.
*/

type amostra = {
    numeros: number[], 
}

const amostraDeIdades: amostra = {

        numeros: [21, 18, 65, 44, 15, 18],

        obterEstatisticas: (numeros) => {...}
}