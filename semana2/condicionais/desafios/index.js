/*function verFilme(){
    let genero = prompt('Qual o gênero do filme?').toUpperCase()
    let preco = prompt('Qual valor do ingresso?')
    
    if(genero === 'FANTASIA' && preco <= 15){
        let lanche = prompt('Qual lanchinho você vai comprar para ver ao filme?')
        console.log('Bom filme! E aproveite o seu(a) ', lanche)
    }else{
        console.log('Escolha outro filme :(')
    }
}

verFilme()*/

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
    }else if(tipo == 'DO' && categoria == 2 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 1320\n
        Valor total: ${1320 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 3 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 880\n
        Valor total: ${880 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 4 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 330\n
        Valor total: ${330 * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 1 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${1980 * 410}\n
        Valor total: U$ ${(1980 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 2 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${1320 * 410}\n
        Valor total: U$ ${(1320 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 3 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${880 * 410}\n
        Valor total: U$ ${(880 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 4 && etapa == 'FI'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${330 * 410}\n
        Valor total: U$ ${(330 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 1 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${1320 * 410}\n
        Valor total: U$ ${(1320 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 2 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${880 * 410}\n
        Valor total: U$ ${(880 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 3 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${550 * 410}\n
        Valor total: U$ ${(550 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 4 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${220 * 410}\n
        Valor total: U$ ${(220 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 1 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${660 * 410}\n
        Valor total: U$ ${(660 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 2 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${440 * 410}\n
        Valor total: U$ ${(440 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 3 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${330 * 410}\n
        Valor total: U$ ${(330 * 410) * qntIngressos}`)
    }else if(tipo == 'IN' && categoria == 4 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: U$ ${170 * 410}\n
        Valor total: U$ ${(170 * 410) * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 1 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 660\n
        Valor total: R$ ${660 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 2 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 440\n
        Valor total: R$ ${440 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 3 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 330\n
        Valor total: R$ ${330 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 4 && etapa == 'DT'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 170\n
        Valor total: R$ ${170 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 1 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 1320\n
        Valor total: R$ ${1320 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 2 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 880\n
        Valor total: R$ ${880 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 3 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 550\n
        Valor total: R$ ${550 * qntIngressos}`)
    }else if(tipo == 'DO' && categoria == 4 && etapa == 'SF'){
        console.log(`--Dados da compra--\n
        Nome do cliente: ${nome}\n
        Tipo do jogo: ${tipo}\n
        Etapa do jogo: ${etapa}\n
        Categoria: ${categoria}\n
        Quantidade de ingressos: ${qntIngressos}\n
        --Valores--\n
        Valor do ingresso: R$ 220\n
        Valor total: R$ ${220 * qntIngressos}`)
    }
}

bilheteria()
