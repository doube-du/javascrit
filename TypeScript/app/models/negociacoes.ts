import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //  : -> Indica o formato
    // Format<Type>
    // Também pode ser declarado como "private negociacoes: Negociacao[] = []"
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // O formato ReadonlyArray permite acessos de somente leitura, sem modificação.
    public lista() : ReadonlyArray<Negociacao>{
        return this.negociacoes;        
    }
}