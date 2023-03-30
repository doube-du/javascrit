let botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', function(){
    // Partiu AJAX *-*
    // https://api-pacientes.herokuapp.com/pacientes Iniciando APIs

    let xhr = new XMLHttpRequest(); // O nome é por ter sido utilizado inicialmente para XML mas serve com JSON

    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes'); // Define o Método, depois a URL
    
    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            let resposta = xhr.responseText;
            // console.log(xhr.responseText); // Texto de resposta
            let pacientes = JSON.parse(resposta); // Converte Texto em JSON
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(`Algo deu errado.\nStatus: ${xhr.status}\n${xhr.responseText}`);
        }
    });
    
    xhr.send();
    
});