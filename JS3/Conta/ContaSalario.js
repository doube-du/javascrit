import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    static numeroContas = 0;

    constructor(agencia, cliente){
        //SUPER evoca o construtor da classe pai (ou mãe - viva o matriarcado)
        super(agencia, cliente, 0);
    }

    sacar(valor){
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}