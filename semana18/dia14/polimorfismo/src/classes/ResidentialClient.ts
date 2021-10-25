import { Client } from "../interfaces/Client";
import { Residence } from "./Residence";



class ResidentialClients extends Residence implements Client{
    name:string = 'Erica'
    registrationNumber:number = 32
    consumedEnergy:number = 2500

    calculateBill():number{
        return this.consumedEnergy * 0.75
    }
}

export const resident = new ResidentialClients(3, '41110330')
    