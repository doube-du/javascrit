// Javascript passou a ter classes a partir do ES6. Dessa forma, todo conteúdo de classe é relativamente novo.
// A seguir um vislubre de como se declarar classes em JS.

class Livro { // Define a classe - Não leva parâmentro, pois eles ficam com o construtor
    constructor(nome, editora, paginas){ // Define o construtor padrão da classe já com os atributos
        this.nome       = nome;
        this.editora    = editora;
        this.paginas    = paginas;
    }
    //Funções de classe (métodos) não precisam de declaração da palavra chave 'function'
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`);
    }
    descreverLivro(){
        console.log(`Conheça o livro ${this.nome}, da editora ${this.editora}. 
            O livro conta com ${this.paginas} páginas !`);
    }
}

//Instanciamos um objeto seguindo os parâmetros do construtor
const beastsOfBurden =  new Livro('Beasts of Burden', 'Pipoca e Nanquim', '200');

beastsOfBurden.anunciarTitulo();
beastsOfBurden.descreverLivro();

/*
    Existem algumas diferenças entre as declarações de classe em javascript e outras linguagens.
    Em JavaScript as classes não são içadas (hoisted, puxadas para cima). Então, ao desenvolver, 
a classe precisa se delcarada antes SEMPRE.
*/

///////////////////////////////////////////////////////////////////////////
// Para herança
class LivroColecao extends Livro{ // Declarado como uma classe normal
    constructor(nome, nomeColecao){
        super(nome);
        this.nomeColecao = nomeColecao;
    }

    descreverColecao(){
        console.log(`O livro ${this.nome}, faz parte da coleção ${this.nomeColecao}`);
    }
}

const beastsAnimalRites = new LivroColecao('Beasts of Burden - Rituais Animais','Beasts of Burden');

beastsAnimalRites.descreverColecao();