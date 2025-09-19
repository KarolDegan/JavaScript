import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";


export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        //this.negociacoesView.update(this.negociacoes);  // executo o metodo que escreve no html a tabela
    }

    adiciona() : void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicona(negociacao);
        this.negociacoesView.update(this.negociacoes); // atualizar a tabela de negociações
        this.mensagemView.update('negociação adicionada com sucesso');
        this.limparFormulario();   
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g; // expressão regular para trocar o - por , no input data
        const date = new Date(this.inputData.value.replace(exp, ','));

        const quantidade = parseInt(this.inputQuantidade.value);

        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}