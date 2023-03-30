class Mensagem{
    constructor(texto = ''){ //Valor padrão de parâmetro - Novidade do ECMAScript 6
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}