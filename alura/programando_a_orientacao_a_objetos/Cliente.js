export class Cliente {
    nome;
    _cpf;

    constructor (nome,cpf){
        this.nome = nome;
        this._cpf = cpf;  //passa a só poder ser atribuida na declaração do objeto
    }

    get cpf(){
        return this._cpf;
    }

}