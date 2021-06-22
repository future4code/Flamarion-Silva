function dadosDoUsuario(){
    let nome = prompt('Informe sua nome:')
    let idade = Number(prompt('Informe sua idade:'))
    let profissao = prompt('Informe sua profissão:')
    
    const objDaFuncao = {
        nome: nome,
        idade: idade,
        profissao: profissao
    } 
    
    console.log(objDaFuncao)
    console.log(typeof objDaFuncao)
}

dadosDoUsuario()

function lancamentoDeFilme(){
    const filme1 = {
        nome: prompt('Informe o nome de um filme:'),
        anoDeLancamento: Number(prompt('Informe sua data de lançamento:'))
    }
    const filme2 = {
        nome: prompt('Informe o nome de um filme:'),
        anoDeLancamento: Number(prompt('Informe sua data de lançamento:'))
    }
    
    let primeiroLancamento = filme1.anoDeLancamento > filme2.anoDeLancamento
    let lancamentoSimultaneo = filme1.anoDeLancamento === filme2.anoDeLancamento
    
    console.log(`O primeiro filme foi lançado antes do segundo?, ${primeiroLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano que o segundo?, ${lancamentoSimultaneo}`)
}

lancamentoDeFilme()

const fruta3 = {
	nome: 'laranja',
	disponibilidade: true
}

function auxSacolao(fruta){
    return !fruta.disponibilidade
}

console.log(auxSacolao(fruta3))
