```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numVezes = 0
  
  for(let c = 0; c < arrayDeNumeros.length; c++){
      if(arrayDeNumeros[c] == numeroEscolhido){
        numVezes++
      }
  }
  if(numVezes > 0){
    console.log(`O número ${numeroEscolhido} aparece ${numVezes}`)
  }else{
    console.log('Número não encontrado!')
  }
}```