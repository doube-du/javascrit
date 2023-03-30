import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1  = new Cliente('Eduardo', '00000000272');
const cliente2  = new Cliente('Igor', '00000000272');

const cc1       = new ContaCorrente ('001', 0.50, cliente1);
const cc2       = new ContaCorrente ('001', 100.0, cliente2);

console.log(cc1);
cc1.sacar(50);
cc1.depositar(50);

console.log(cc2);
cc2.sacar(50);

cc2.transferir(10, cc1);
console.log(cc1);

console.log(`Número de contas: ${ContaCorrente.numeroContas}`);