console.log('\nTrabalhando com Loops');

console.log('\n\nLista de Destinos:');

const listaCidades = [
    'Salvador', 'São Paulo', 'Rio de Janeiro'
];

const idadeComprador    = 18;
const estaAcompanhada   = true;
const destino           = 'Salvador';
let passagemComprada    = false;

console.log(listaCidades);

//Variavel que gera um booleano.
const podeComprar       = idadeComprador >= 18 || estaAcompanhada;

let destinoExiste = false;
/*
let contador = 0;
while(contador < listaCidades.length){
    if(listaCidades[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}*/

for(i = 0; i < listaCidades.length; i++){
    if(listaCidades[i] == destino){
        destinoExiste = true;
        break;
    }
}

if (destinoExiste && podeComprar){
    console.log('Boa viagem');
}else{
    console.log('Ops, algo deu errado');
}