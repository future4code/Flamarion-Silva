function verFilme(){
    let genero = prompt('Qual o gênero do filme?').toUpperCase()
    let preco = prompt('Qual valor do ingresso?')
    
    if(genero === 'FANTASIA' && preco <= 15){
        let lanche = prompt('Qual lanchinho você vai comprar para ver ao filme?')
        console.log('Bom filme! E aproveite o seu(a) ', lanche)
    }else{
        console.log('Escolha outro filme :(')
    }
}

verFilme()

function bilheteria(){
    let nome = prompt('Informe seu nome completo:')
    let tipo = prompt('Informe qual tipo do jogo:\n[IN] Internacional\n[DO] Doméstico').toUpperCase()
    let etapa = prompt('Informa a etapa do jogo:\n[SF] Semi-final\n[DT] Decisão de terceiro lugar\n[FI] Final').toUpperCase()
    let categoria = prompt('Informe a categoria de 1 à 4:')
    let qntIngressos = Number(prompt('Quantidade de ingressos:'))
    
    if(tipo == 'DO' && categoria == 1 && etapa == 'FI'){
        
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 1980\n
        Valor total: ${1980 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 2){
        
    }
}

bilheteria()
