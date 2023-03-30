import {Conta} from './Conta.js';

export class ContaPoupanca extends Conta{
    constructor(agencia, cliente, saldo){
        //SUPER evoca o construtor da classe pai (ou mãe - viva o matriarcado)
        super(agencia, cliente, saldo);
    }
    
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
    
}