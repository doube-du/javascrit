let campoFiltro = document.querySelector('#filtro');

campoFiltro.addEventListener('input',function(){
    // console.log(`Digitaram no campo: ${this.value}`);
    let pacientes = document.querySelectorAll('.paciente');
    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
            let pacienteBuscado = campoFiltro.value;
            let nome            = paciente.querySelector('.info-nome').textContent;
            var expressao       = new RegExp(pacienteBuscado, 'i');
        
            if(expressao.test(nome)){ // Todos os que passarem no teste de Expressão Regular
                paciente.classList.remove('escondido');
            }else{
                paciente.classList.add('escondido');
            }
        });
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove('escondido');
        });
    }
});
