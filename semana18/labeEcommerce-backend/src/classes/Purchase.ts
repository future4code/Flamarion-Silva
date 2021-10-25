import { Product } from "./Product"

export class Purchase extends Product{
    userId:string
    productId:string
    quantityOfItems:number

    constructor(
        userId:string,
        productId:string,
        id:string,
        name:string,
        description:string,
        price:number,
        quantityOfItems:number

    ){
        super(id, name, description, price)
        this.userId = userId
        this.productId = id
        this.quantityOfItems = quantityOfItems
    }

    totalPrice():number{
        return this.quantityOfItems * this.price
    }
}