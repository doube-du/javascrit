class NegociacaoController{
    constructor(){
        
        let $ = document.querySelector.bind(document); // Permite imitar o jQuery
        
        this._data              = $('#data');
        this._quantidade        = $('#quantidade');
        this._valor             = $('#valor');
        
        this._mensagem          = new Mensagem();
        this._negociacoesView   = new NegociacoesView($('#negociacoes_View'));

        this._listaNegociacoes  = new ListaNegociacoes();
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagemView      = new MensagemView($('#mensagem_View'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();   
        
        //Delegando responsabilidade. Criando o Helper, o metodo fica isolado
        let negociacao  = this._criaNegociacao();

        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);

        this._listaNegociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._listaNegociacoes);

        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaFormulario(){
        this._data.value        = '';
        this._quantidade.value  = 1;
        this._valor.value       = 0.0;

        this._data.focus();
    }

}