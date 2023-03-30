console.log('Trabalhando com Condicionais');

console.log('Lista de Destinos');

const idadeComprador = 17;

const estaAcompanhada = false;

const listaCidades = [
    'Salvador', 'São Paulo', 'Rio de Janeiro'
];

console.log(listaCidades);
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log('Comprador maior de idade / está acompanhado');
    console.log('Boa viagem');
    listaCidades.splice(1, 1);
} else {
    console.log('Comprador menor de idade / desacompanhado. Não vender');
}

console.log(listaCidades);