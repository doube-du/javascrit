/*
Ser autenticávle significa ter um método autenticar

DuckType = Tipo do pato - Utilizado para linguagens fracamente tipadas para fazerem verificações
*/

export class SistemaAutenticaco{
    
    static login(autenticavel, senha){
        if(SistemaAutenticaco.autenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static autenticavel(autenticavel){
        if("autenticar" in autenticavel && // Verifica se o objeto possui uma chave autenticar
        autenticavel.autenticar instanceof Function){ // e se é uma função
            return true
        }
        console.log('Não é autenticável');
        return false; // Verifica se o método existe na classe (do objeto)
    }
}