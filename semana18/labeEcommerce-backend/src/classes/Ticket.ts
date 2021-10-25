import { Product } from "./Product";

export class Ticket extends Product{
    origin:string
    destiny:string

    constructor(
        id:string,
        name:string,
        description:string,
        price:number,
        origin:string,
        destiny:string
    ){
        super(id, name, description, price)
        this.origin = origin
        this.destiny = destiny
    }
}