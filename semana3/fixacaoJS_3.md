```
    function calculaNota(ex, p1, p2) {
  let mp = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)
  
   if(mp >= 9){
     return console.log('A')
   }else if(mp < 9 && mp <= 7.5){
     return console.log('B')
   }else if(mp < 7.5 && mp >= 6){
     return console.log('C')
   }else{
     return console.log('D')
   }
}

calculaNota(10, 10, 10)```
