const botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event){ //Função Anonima

    event.preventDefault(); // Prevê o update da tela (comportamento padrão do submit) e o captura.
    
    let form        = document.querySelector('#form-adiciona'); // O form no QuerySelector carrega todos os inputs como um objeto [e isso é beem legal]

    let paciente    = obtemPacienteDoForm(form);
    
    let erros       = validaPaciente(paciente);
    
    // if(!validaPaciente(paciente)){
        if(erros.length > 0){
            exibeMensagensErros(erros);
        return;
    }
    
    // Adiciona paciente a tabela
    
    adicionaPacienteNaTabela(paciente);

    form.reset();

    let listaErros = document.querySelector('#mensagem-erro');
    listaErros.innerHTML = '';

});

function obtemPacienteDoForm(form){
    let paciente = {
        nome    : form.nome.value,
        peso    : form.peso.value,
        altura  : form.altura.value,
        gordura : form.gordura.value,
        imc     : calculaIMC(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaLinha(paciente){
    // Cria áreas de TD e TR    
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    let nomeTd      = montaTd(paciente.nome, 'nome');
    let pesoTd      = montaTd(paciente.peso, 'peso');
    let alturaTd    = montaTd(paciente.altura, 'altura');
    let gorduraTd   = montaTd(paciente.gordura, 'gordura');
    let imcTd       = montaTd(paciente.imc, 'imc');

    // Adiciona colunas a linha
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add('info-' + classe);
    
    return td;
}

function validaPaciente(paciente){
    let erros = [];

    if(!validaNome(paciente.nome)){ // Ou == "";
        erros.push('Nome não informado');
    }

    if(!validaGordura(paciente.gordura)){
        erros.push('Gordura inválida');
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso inválido');
    }
    
    if(!validaAltura(paciente.altura)){
        erros.push('Altura inválida');
    }

    return erros;    
}

function adicionaPacienteNaTabela(paciente){
    let linha       = montaLinha(paciente);
    let tabela      = document.querySelector('#tabela-pacientes');
    tabela.appendChild(linha);
}

function exibeMensagensErros(erros){
    let listaErros = document.querySelector('#mensagem-erro');
    listaErros.innerHTML = '';
    erros.forEach(function(erro){
        let erroImpresso = document.createElement('li');
        erroImpresso.textContent = erro;
        listaErros.appendChild(erroImpresso);
    });
}