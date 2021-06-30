```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let ganhos = 0 
    
    for(let c = 0; c < qtdeCarrosVendidos; c++){
      let valorPorCarro = valorTotalVendas / qtdeCarrosVendidos
      let porcentagem = (valorPorCarro * 5) / 100
      ganhos += (100 + porcentagem)
    }
    return ganhos + 2000
}

console.log(calculaSalario(3, 45000))```


