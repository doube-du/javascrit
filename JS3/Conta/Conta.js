import {Cliente} from '../Cliente.js';

// Classe Abstrata - Não pode ser construída
// * Lembrar do PHP com classes Abstratas.
export class Conta{
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

    constructor(agencia, cliente, saldo = 0){
        if(this.constructor == Conta){
            //Throw imprime um erro na tela e para a execução do programa
            throw new Error(`Contas precisam ter um tipo especificado`);
        }

        this.agencia    = agencia;
        this._saldo     = saldo;
        this._cliente   = cliente;
    }
    
    sacar(valorSacado){

        throw new Error(`Você deve implementar o método sacar na classe filha`);
        //Código removido para tornar o método ABSTRATO.
        // * Dessa forma todos os métodos que precisarem sacar precisam impelmentar um método sacar
        /*
        let taxa = 1;
        return this._sacar(valorSacado, taxa);
        */
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;

        if(valorSacado > this._saldo){
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

    tirarExtrato(){
        console.log(`O saldo de ${this._cliente.nome} é ${this._saldo}`);
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