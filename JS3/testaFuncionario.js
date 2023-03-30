import {Cliente}    from './Cliente.js';
import { Diretor }  from './Funcionario/Diretor.js';
import { Gerente }  from './Funcionario/Gerente.js';
import { SistemaAutenticaco } from './SistemaAutenticacao.js';

const gerente = new Gerente('Rita', 5000, 123456789);
const diretor = new Diretor('Yuri', 7000, 987654321);
const cliente = new Cliente('Eduardo', 12345679, '123');

console.log(gerente);
console.log(diretor);
console.log(cliente);

gerente.cadastrarSenha('0123');
diretor.cadastrarSenha('1234');

const gerLogado = SistemaAutenticaco.login(gerente, '0123');
const dirLogado = SistemaAutenticaco.login(diretor, '1234');
const cliLogado = SistemaAutenticaco.login(cliente, '123');

console.log(gerLogado, dirLogado, cliLogado);