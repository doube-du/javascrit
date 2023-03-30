class NegociacoesView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model){
        let table = `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${
                    model.negociacoes.map(function(n){ // O método map cria um callback para cada item do Array (chamando função(n) cada item é chamado de N - com arraw function fica: () => n  )
                        return `<tr>
                                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                                    <td>${n.quantidade}</td>
                                    <td>${n.valor}</td>
                                    <td>${n.volume}</td>
                                </tr>`;
                    }).join('') // O método join junta todos os elementos de um array em uma única string, separados por um valor passado como parâmetro
                }
            </tbody>
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${
                        model.negociacoes.reduce(function(total, negociacao){
                            return total + negociacao.volume;
                        }, 0.0)
                    }
                </td>
            </tfoot>
        </table>`;
        
        return table;
    }

    /* update(model){
        this._elemento.innerHTML = this._template(model);
    } */
}
