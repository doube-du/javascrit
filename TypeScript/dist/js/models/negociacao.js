export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const dt = new Date(this._data.getTime());
        return dt;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, qtdeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(qtdeString);
        const valor = parseFloat(valorString);
        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }
}
