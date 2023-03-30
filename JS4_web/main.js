const teclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio){
    idAudio = `#som_${idAudio}`;
    const som = document.querySelector(idAudio).play();    
    // if(){
        
    // }
}

/*
Com While

let contador = 0;
while(teclas.length > contador){
    const tecla = teclas[contador];
    tecla.onclick = function (){
        tocaSom(tecla.classList[1]); // Poderia ser usada a função this.
    };
    contador++;
}
*/

/* 
Com um for convencional 
*/

for(let i = 0; i < teclas.length; i++){
    const tecla = teclas[i];
    
    tecla.onclick = function (){
        tocaSom(tecla.classList[1]); // Poderia ser usada a função this.
    }

    tecla.onkeydown = function(evento){ 
        if(evento.key == 'Enter' || evento.key == ' '){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(evento){
        if(evento.key == 'Enter' || evento.key == ' '){
            tecla.classList.remove('ativa');
        }
    }
}

/*
Com uma função propria para objetos, o FOREACH (Para Cada / Parecido com o PHP)

teclas.forEach(tecla => {
    tecla.onclick = function(){
        tocaSom(tecla.classList[1]);
    }
});
*/
