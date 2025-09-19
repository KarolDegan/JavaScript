import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
        
    
    template(model: Negociacoes): string{ //vai retornar uma string HTML
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>             
                ${model.lista().map(negociacao => { // lista() é usado para  garantir que o componente de visualização (a view) não modifique diretamente a lista original de negociações.
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `;//O método map retorna um array de strings, onde cada string representa uma linha da sua tabela HTML (<tr><td>...</td></tr>). No entanto, o que você quer no final é uma única string contendo todas as linhas juntas, para poder injetar no HTML da página.
    }   //É aí que entra o .join(''). Ele pega todas as strings do array e as concatena em uma única string, usando uma string vazia ('') como separador.

    
}