import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData       : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor      : HTMLInputElement;

    // private negociacoes     : Negociacoes = new Negociacoes();
    private negociacoes     = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes-view', true);

    private mensagemView    = new MensagemView('#mensagemView');

    constructor(){
        this.inputData          = document.querySelector('#data') as HTMLInputElement;
        // OU <type>value
        this.inputQuantidade    = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor         = document.querySelector('#valor') as HTMLInputElement;

        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona() : void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value);
        if(!(this.diaUtil(negociacao.data))){
            return this.mensagemView.update('Negociações só podem ser feitas em dias uteis');
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private diaUtil(data: Date) : boolean {
        return  data.getDay() > DiasDaSemana.DOMINGO && 
                data.getDay() < DiasDaSemana.SABADO;
    }
    
    /* 
    private criaNegociacao(): Negociacao{
        const exp           = /-/g;
        const data          = new Date(this.inputData.value.replace(exp,','));
        const quantidade    = parseInt(this.inputQuantidade.value);
        const valor         = parseFloat(this.inputValor.value);
        
        const negociacao    = new Negociacao(data, quantidade, valor);

        return negociacao; 
    }
    */

    private limparFormulario() : void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus() ;
    }

    private atualizaView() : void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada');
    }
}