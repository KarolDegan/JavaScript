import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";


export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    //private readonly SABADO = 6;
    //private readonly DOMINGO = 0;

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        //this.negociacoesView.update(this.negociacoes);  // executo o metodo que escreve no html a tabela
    }

    public adiciona() : void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas');
            return;
        }
        this.negociacoes.adicona(negociacao);
        this.atualizaView();
        this.limparFormulario(); 
          
    }

    private ehDiaUtil(data : Date){
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay()< DiasDaSemana.SABADO;
    }

   

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes); // atualizar a tabela de negociações
        this.mensagemView.update('negociação adicionada com sucesso');
    }
}