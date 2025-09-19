export class Negociacoes {
    constructor() {
        this.negociacoes = []; //dentro do diamante se diz o tipo 
    }
    // Negociacao[] == Array<Negociacao>
    adicona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
