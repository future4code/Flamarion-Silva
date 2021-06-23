//Assisti um video do Felipe Deschamps que dizia que codar em inglês abrange uma maior amplitude com relação aqueles que irão analisar seu código, em outras palavras, em termos de mercado de trabalho, amplia seus horizontes. Até então não vi a Labenu tocar no assunto a respeito. Meu inglês é bom, se eu não estou fluente é por falta de prática, ou talvez, por não ter tanto contato com a natividade da lingua. Na próxima aula vou tocar no assunto

function guessNumber(){
    let hiddenNumber = Number(prompt('Digite o número à ser descoberto:'))
    console.log('Vamos jogar!')
    let shotToDiscover = Number(prompt('Chute os números até acertar:'))
    
    let counter = 0
        
    while(shotToDiscover != hiddenNumber){
        let trying = Number(prompt('Chute os números até acertar:'))
        shotToDiscover = trying
        
        counter++
        
        if(shotToDiscover > hiddenNumber){
            console.log('O número chutado foi: ', shotToDiscover)
            console.log('Errou. O número escolhido é menor')
        }else if(shotToDiscover < hiddenNumber){
            console.log('O número chutado foi: ', shotToDiscover)
            console.log('Errou. O número escolhido é maior')
        }else{
            console.log('Acertou!')
            console.log('O número de tentativas foi: ', counter)
        }
    }
    
}

guessNumber()

function guessNumber2(){
    let hiddenNumber = Math.floor(Math.random() * 101)
    console.log('Vamos jogar!')
    let shotToDiscover = Number(prompt('Chute os números até acertar:'))
    
    let counter = 0
        
    while(shotToDiscover != hiddenNumber){
        let trying = Number(prompt('Chute os números até acertar:'))
        shotToDiscover = trying
        
        counter++
        
        if(shotToDiscover > hiddenNumber){
            console.log('O número chutado foi: ', shotToDiscover)
            console.log('Errou. O número escolhido é menor')
        }else if(shotToDiscover < hiddenNumber){
            console.log('O número chutado foi: ', shotToDiscover)
            console.log('Errou. O número escolhido é maior')
        }else{
            console.log('Acertou! O número é: ', hiddenNumber)
            console.log('O número de tentativas foi: ', counter)
        }
    }
    
}

guessNumber2()

//Não foi difícil, apenas troquei o valor da variável "hiddenNumber" pelo método random. E toda a implementação da função anterior fez o resto. Eu diria que o primeiro programa foi mais difícil


