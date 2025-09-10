import { Conta } from "./Conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    //agencia;
    //_cliente;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
   //_saldo = 0; é mais adequado inicializar as variaveis dentro do construtor
    

    constructor(cliente, agencia){
        super(0,cliente,agencia);// super referencia a classe mãe
        ContaCorrente.numeroDeContas += 1;
    }

    //super pode chamar outros métodos da classe sem ser o construtor

    teste(){
        super.teste(); //se refere (executa) ao metodo teste da classe mãe
        console.log("Teste na classe contaCorrente");
    }

    sacar(valor) {
        let taxa =1.1;
        return this._sacar(valor,taxa); // pode ser super.sacar()
    }

}
