import { Client } from "../interfaces/Client";
import { Industry } from "./Industry";


class IndustryClient extends Industry implements Client{
    name:string
    registrationNumber:number
    consumedEnergy:number
    constructor(
        name:string,
        registrationNumber:number,
        consumedEnergy:number,
        private industryNumber:number,
        machinesQuantity:number,
        cep:string
    ){
        super(machinesQuantity, cep)
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
    }
    
    getIndustryNumber():number{
        return this.industryNumber
    }

    calculateBill():number{
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}


export const ind = new IndustryClient('Rafael', 12456, 15223, 123, 120, '123654')