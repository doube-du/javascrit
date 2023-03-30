class Negociacao{ //Definição de classe [ECMA SCRIPT 6]
    constructor(data, quantidade, valor){// Metodo construtor padrão
        this._data       = new Date(data.getTime()); //
        this._quantidade = quantidade; // THIS indica a referencia do objeto atual que instancia a classe
        this._valor      = valor;

        //Freeze congela a instancia do Objeto, e impede que valores que são privados, sejam modificados.
        Object.freeze(this);
    }

    //  O javascript não possui encapsulamento. Todos os campos são públicos
    //  A funcionalidade get, permite a criação de um acessor, sem a necessidade de ter um 
    //método reservado, com um verbo novo.

    get volume(){
        let volume = this._quantidade * this._valor;
        return volume;
    }

    get data(){
        // return this._data;
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}