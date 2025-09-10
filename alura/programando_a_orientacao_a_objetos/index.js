
class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar (valor) {
        if(this.saldo>= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Amanda";
cliente1.cpf = 11122233300;
cliente1.rg = 884456652



const cliente2 = new Cliente();
cliente2.nome = "Renam";
cliente2.cpf = 88822233300;

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.saldo = 100;
contaCorrenteCliente1.agencia = 1001;


console.log(cliente1);
console.log(cliente2)