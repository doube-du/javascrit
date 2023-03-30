import {Cliente} from './Cliente.js'

export class ContaCorrente{
    //Atributo estático da classe não considera as instâncias
    static numeroContas = 0;

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }

    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente;
    }

    constructor(agencia, saldo, cliente){
        this.agencia    =  agencia
        this._saldo     =    saldo
        this._cliente   =  cliente
        ContaCorrente.numeroContas += 1 ;
    }
    
    sacar(valorSacado){
        if(this._saldo <= valorSacado){
            console.log(`Você não possui saldo o suficiente`);
            return; //Early return
        }

        this._saldo = this._saldo - valorSacado;
        console.log(`${this.cliente.nome} sacou R$ ${valorSacado}\nNovo saldo: R$ ${this.saldo}`);
    }

    depositar(valorDepositado){
        if(valorDepositado <=  0){
            console.log(`O valor depositado deve ser maior que 0`);
            return;
        }

        this._saldo += valorDepositado;
        console.log(`${this.cliente.nome} depositou ${valorDepositado}\nNovo saldo: ${this._saldo}`);
    }

    transferir(valor, conta){
        if(valor <= 0){
            console.log(`O valor precisa ser superior a zero`);
            return;
        }

        if(valor > this._saldo){
            console.log(`Você não possui saldo o suficiente`);
            return;
        }

        this._saldo -= valor;
        conta.depositar(valor);
        console.log(`Você transfeiriu R$ ${valor} para ${conta.cliente.nome}`);
    }
}