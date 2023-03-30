export class Negociacao {
    /* 
    private _data       : Date;
    private _quantidade : number;
    private _valor      : number;

    constructor(data : Date, quantidade : number, valor : number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    } 
    */
    // É possível reduzir o código acima da seguinte maneira:

    constructor(
        private _data: Date, 
        // É possível que o dado seja declarado como público, porém como readonly (public readonly data: Date)
        // * Vale notar que isso só protege tipos primitivos de dados. Tipos complexos como Objetos, ficam furados
        public readonly quantidade: number, 
        public readonly valor: number
    ){}
    //Dessa forma o código fica mais enxuto

    get data() : Date {
        const dt = new Date(this._data.getTime());
        // return this._data;
        // Protegemos assim o tipo complexo de dados:: Programação Defensiva
        return dt;
    }

    get volume() : number{
        return this.quantidade * this.valor;
    }

    // Static define um metodo da classe e não da instancia. 
    // Dessa forma, pode ser acessado diretamente pela classe sem a necessidade de instanciar um objeto
    public static criaDe(dataString: string, qtdeString: string, valorString: string): Negociacao{
        const exp           = /-/g;
        const data          = new Date(dataString.replace(exp,','));
        const quantidade    = parseInt(qtdeString);
        const valor         = parseFloat(valorString);
        
        const negociacao    = new Negociacao(data, quantidade, valor);

        return negociacao;
    }
}