class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error ('O método template deve ser instanciado pela classe filha');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}