import { Client } from "../interfaces/Client";
import { Commerce } from "./Commerce";


class CommercialClient extends Commerce implements Client{
    name:string
    registrationNumber:number
    consumedEnergy:number

    constructor(
        name:string,
        registrationNumber:number,
        consumedEnergy:number,
        private cnpj:string,
        floorsQuantity:number,
        cep:string
    ){
        super(floorsQuantity, cep)
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
    }
    
    calculateBill():number{
        return this.consumedEnergy * 0.53
    }

    getCnpj():string{
        return this.cnpj
    }
}


export const comercial = new CommercialClient('Fernando', 253, 2255, '21245', 7, '23456') 