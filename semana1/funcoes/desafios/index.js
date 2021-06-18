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
    let hipo = quadradoDaHipo ** (1/2)    
    
    return hipo 
}

console.log(teoPitagoras(3, 4))


//O desafio de hoje foi espetacular. Queria agradecer a Labenu que está sendo uma Mãe Sabedoria pra meus estudos em javascript. Valeu!!!
