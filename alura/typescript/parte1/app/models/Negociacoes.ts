import { Negociacao } from "./Negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []; //dentro do diamante se diz o tipo 
    // Negociacao[] == Array<Negociacao>

    adicona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{ // readonly Negociacao[] == ReadonlyArray<Negociacao>
        return this.negociacoes;
    }
}