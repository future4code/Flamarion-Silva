export class Product{
    protected id:string
    protected name:string
    protected description:string
    protected price:number

    
    constructor(id:string, name:string, description:string, price:number){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
    }

    getId():string{
        return this.id
    }

    getName():string{
        return this.name
    }

    getDescription():string{
        return this.description
    }

    getPrice():number{
        return this.price
    }
}