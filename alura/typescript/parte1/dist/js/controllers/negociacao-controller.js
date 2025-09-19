import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        //this.negociacoesView.update(this.negociacoes);  // executo o metodo que escreve no html a tabela
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicona(negociacao);
        this.negociacoesView.update(this.negociacoes); // atualizar a tabela de negociações
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; // expressão regular para trocar o - por , no input data
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
