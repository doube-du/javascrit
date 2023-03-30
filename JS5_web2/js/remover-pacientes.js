
let tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick',function(event){
    let alvo    = event.target;
    let pai     = alvo.parentNode;
    pai.classList.add('fadeout');
    setTimeout(function(){
        pai.remove();
    }, 500);
});
