class DateHelper{

    /*
        Metodo estático é todo metodo que pertence a deifinção da classe.
    Dessa forma, os métodos podem ser invocados diretamente sem a necessidade
    de instanciar um objeto da classe antes.
    */
    
    constructor(){
        //O construtor vazio impede que eu crie objetos DateHelper :)
        throw new Error('DateHelper não pode ser instanciado');
    }

    static dataParaTexto(data){
        //Template string usando interpolação
        let dataFormatada = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
        return dataFormatada;
    }

    static textoParaData(texto){
        //Expressão regurar
        // \d   = Digito Numero
        // \D   = Digito não Numero
        // {x}  = tamanho
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato "YYYY-MM-DD"');
        }

        let dataFracionada = texto.split('-');
        dataFracionada[1] = dataFracionada[1] - 1;
        // return dataFracionada;
        let data = new Date(
                    dataFracionada[0], 
                    dataFracionada[1], 
                    dataFracionada[2]); 
        // É possivel fazer com RegEx (Regular Expressions) ~> (/-/g',')
        
        return data;
    }
}