import { Negociacao } from "./Negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []; //dentro do diamante se diz o tipo

    adicona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}