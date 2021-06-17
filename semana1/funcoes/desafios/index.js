const funcao = (msg)=>{
    console.log(msg)
}

const soma = (n1, n2)=>{
    let resultado = n1 + n2
    
    funcao(resultado)
}

soma(2, 5)

function teoPitagoras(cat1, cat2){
    let quadradoDaHipo = (cat1 * cat1) + (cat2 * cat2)
    
    return quadradoDaHipo
}

console.log(teoPitagoras(2, 2))
console.log('O resultado em questão é o quadrado da hipotenusa, como não se pode utilizar o que ainda não foi ensinado, não encontrei meios para achar a raiz do resultado')

//O desafio de hoje foi espetacular. Queria agradecer a Labenu que está sendo uma Mãe Sabedoria pra meus estudos em javascript. Valeu!!!
