import { v4 } from "uuid"


export class generateId {
    idGenerator = ():string =>{
        return v4()
    }
}