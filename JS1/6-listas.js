console.log('Trabalhando com Listas');

//Pode ser declarado como um objeto com >> "const listaCidades = new Array ('dado','dado','etc');"
const listaCidades = [
    'Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba'
];

listaCidades.push('Teresina');

console.log(listaCidades);

//Splice remove, aparte de X elemento, Y elementos, sendo ".splice(X, Y)"
listaCidades.splice(3, 1);

console.log(listaCidades);

console.log(listaCidades[1]);
