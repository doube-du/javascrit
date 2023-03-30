import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDia } from './../interfaces/negociacao-do-dia';
export class NegociacoesService{
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados') // Fetch recebe um parâmetro que é o endereço da API
            .then(res => { //then, referente a função assíncrona, retorna uma variavel (neste caso chamada de RES)
                return res.json() // Como a resposta é do tipo Response (json), fazemos a conversão
            })
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
                })
            });
            /*
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes)
            });*/
    }
}