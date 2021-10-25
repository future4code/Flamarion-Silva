export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }



 export const client:Client = {
      name: 'Eric',
      registrationNumber: 21,
      consumedEnergy: 1080,

      calculateBill:()=>{
          return client.consumedEnergy * 0.75
      }
  }