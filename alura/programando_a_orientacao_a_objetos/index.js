import {Cliente} from "./Cliente.js" // precisa colocar o type: module no arquivo package.jason -> npm start
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
//cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteCliente1 = new ContaCorrente();
//contaCorrenteCliente1.saldo = 5000000; // JS deixa adicionar atributos à classes dinamicamente
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.cliente = cliente1;
contaCorrenteCliente1.depositar(500);


console.log(contaCorrenteCliente1);


const conta2 = new ContaCorrente();
conta2.agencia = 2002;
conta2.cliente = cliente2;

contaCorrenteCliente1.transferir(200,conta2); // enquanto os tipos primitivos são passados por cópia, os Objetos são passados por referencia e por isso podem ser alterados dentro da função

console.log(conta2);
console.log(contaCorrenteCliente1);

const conta3 = new ContaCorrente();
conta3.cliente = new Cliente();
conta3.agencia = 3003;
conta3.cliente.nome = "Alfredo";
//conta3.cliente.cpf = "88877799922";

console.log(conta3);

const conta4 = new ContaCorrente();
conta4.cliente = cliente1;
console.log(conta4.cliente);

console.log(ContaCorrente.numeroContas);