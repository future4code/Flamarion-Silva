import { v4 } from "uuid"

export class IdGenerator {
  // constructor(){}
  generateId = (): string => v4()
}