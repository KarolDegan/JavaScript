import { Cliente } from './Cliente.js';
export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    _cliente;
    _saldo = 0; //significa que saldo é privado // saldo e #saldo passam a ser coisas diferentes

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia - agencia;
        ContaCorrente.numeroContas++;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;}
    }

    get cliente(){
        return this._cliente;
    }

    get saldo (){
        return this._saldo;
    }

    sacar (valor){
        if(this._saldo >=valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar (valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor,conta){ // é o objeto contaCorrente de outro cliente
        if(this._saldo >= valor){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
            conta.local = "São Paulo";
        }
    }
}
