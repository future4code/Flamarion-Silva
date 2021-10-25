import { Commerce } from "./classes/Commerce";
import { comercial } from "./classes/CommercialClient";
import { Industry } from "./classes/Industry";
import { Residence } from "./classes/Residence";
import { resident } from "./classes/ResidentialClient";
import { client } from "./interfaces/Client";
import {ind} from "./classes/IndustryClient";


console.log(client.calculateBill())
const residene = new Residence(3, '41.307-395')
const commerce = new Commerce(15, '123')
const industry = new Industry(100, '3355')
console.log(resident.calculateBill())
console.log(comercial.calculateBill())
console.log(ind.calculateBill())

