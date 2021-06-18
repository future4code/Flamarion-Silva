// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Digite a altura do retângulo:'))
  let largura = Number(prompt('Digite a largura do retângulo:'))
  let area = largura * altura
  
  console.log(area)

}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt('Insira o ano atual:'))
  let anoNascimento = Number(prompt('Agora o ano de seu nascimento:'))
  let idade = anoAtual - anoNascimento
  
  console.log(idade)  

}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura ** 2)
  
  return imc

}

console.log(calculaIMC(70, 1,70))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    let nome = prompt('Digite seu nome:')
    let idade = Number(prompt('Sua idade:'))
    let email = prompt('Seu email:')
    
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores = []
  let cor1 = prompt('Sua primeira cor favorita:')
  cores.push(cor1)
  let cor2 = prompt('Segunda cor:')
  cores.push(cor2)
  let cor3 = prompt('Terceira cor')
  cores.push(cor3)
  
  console.log(cores)

}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let maiusculas = string.toUpperCase()
  
  return maiusculas

}

console.log(retornaStringEmMaiuscula('Bora ver se dá certo'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let faturamento = custo / valorIngresso
  
  return faturamento

}

console.log(calculaIngressosEspetaculo(100, 10))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanho1 = string1.length
  let tamanho2 = string2.length
  
    return tamanho1 == tamanho2

}

console.log(checaStringsMesmoTamanho('pera', 'pera'))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

console.log(retornaPrimeiroElemento([1, 2, 3]))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

console.log(retornaUltimoElemento([1, 2, 3]))

// EXERCÍCIO 11
//VIVA A GAMBIARRA!

function trocaPrimeiroEUltimo(array) {
    let test1 = array.splice(0, 0, array[array.length - 1])
    let test2 = array.pop()
    let test3 = array.push(array[1])
    let test4 = array.splice(1, 1)
        
    return array

}

console.log(trocaPrimeiroEUltimo(['maçã', 'pera', 'limão']))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let eliminaCaseSense1 = string1.toUpperCase()
  let eliminaCaseSense2 = string2.toUpperCase()
  
  return eliminaCaseSense1.includes(eliminaCaseSense2)

}

console.log(checaIgualdadeDesconsiderandoCase('sapo', 'SaPo'))

// EXERCÍCIO 13
//FAZER ISSO AQUI SEM USAR UM IF ME DEIXOU COMPLETAMENTE ABLUBLE

function checaRenovacaoRG() {
  let anoAtual = Number(prompt('Digite o ano atual:'))
  let nascimento = Number(prompt('Digite o ano do seu nascimento:'))
  let anoRG = Number(prompt('Ano da emissão do seu RG:'))
  
  let idade = anoAtual - nascimento
  let tempoRG = anoAtual - anoRG
  
  const renovacao20 = (idade <= 20) && (tempoRG >= 5)
  const renovacao50 = (idade > 20 && idade <= 50) && (tempoRG >= 10)
  const renovacaoMaior50 = (idade > 50) && (tempoRG >= 15)
  
  console.log(renovacaoMaior50 || renovacao50 || renovacao20) 
    

}

checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 != 0)
  
  return bissexto

}

console.log(checaAnoBissexto(1900))

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt('Você tem mais de 18 anos?').toLowerCase()
  let resposta1 = idade.includes('sim')
  let escolaridade = prompt('Você possui ensino médio completo?').toLowerCase()
  let resposta2 = escolaridade.includes('sim')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?').toLowerCase()
  let resposta3 = disponibilidade.includes('sim')
  
  console.log(resposta1 && resposta2 && resposta3)

}

checaValidadeInscricaoLabenu()
