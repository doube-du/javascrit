const robo = document.querySelector('#robotron');

robo.addEventListener('click', (evento) =>{ //Arrow Function ~> É o mesmo que: 'function(){}' como função anônima
    console.log('Clicou no robo...');
    console.log(evento);
});

function dizOi(nome){
    console.log(`Oi, ${nome}. Tudo bem ?`);
}