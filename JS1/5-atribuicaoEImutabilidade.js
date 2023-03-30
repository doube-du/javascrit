console.log("Trabalhando com Atribuições");
//Constantes são váriaveis que não variam
const idade       = 1995 - 2022;

//Let é uma varável que pode ter valores reatribuidos
// let     nome        = 'Eduardo';
//O ideal é evitar que as variáveis fiquem mudando sempre.

const nome        = 'Eduardo';
const sobrenome   = 'Furlaneti';

const nomeCompleto = nome + ' ' + sobrenome;

//Mesmo Resultado 
console.log(nome, sobrenome);
console.log(nome + ' ' + sobrenome);

//É possível usar a cráse para interpolar variavel com texto
console.log(`Meu nome é: ${nome} ${sobrenome}`);
console.log(`Meu nome é: ${nomeCompleto}`);