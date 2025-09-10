import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";

const diretor = new Diretor("Alberto", 10000, 12345577700);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Robert", 5000, 22244488800);
gerente.cadastrarSenha("1234")

const gerenteLogado = SistemaAutenticacao.login(gerente,"1234");
const diretorLogado = SistemaAutenticacao.login(diretor,"123456");

console.log(gerenteLogado, diretorLogado);

const cliente = new Cliente("Lais", 44455577700,"111");



const clienteLogado = SistemaAutenticacao.login(cliente,"111");

