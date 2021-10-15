import { Customer } from "./classes/Customer";
import { User } from "./classes/User";


const Flavio = new User('first', 'flv@gmail.com', 'Flávio', 'senha')
const consumidor = new Customer('1', 'csm@gmal.com', 'Hebert','senha', '2548')

console.log(consumidor.introduceYourself())

