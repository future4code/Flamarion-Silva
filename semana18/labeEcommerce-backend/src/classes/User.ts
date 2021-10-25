export class User{
    private id:string
    private name:string
    private email:string
    private age:number

    constructor(id:string, name:string, email:string, age:number){
        this.id = id
        this.name = name
        this.email = email
        this.age = age
    }

    getId():string{
        return this.id
    }

    getName():string{
        return this.name
    }

    getEmail():string{
        return this.email
    }

    getAge():number{
        return this.age
    }
}