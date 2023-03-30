class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){  
        // return this._negociacoes;
        //Programação defensiva...
        return [].concat(this._negociacoes);
    }
}