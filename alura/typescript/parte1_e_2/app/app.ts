import { NegociacaoController } from './controllers/negociacao-controller.js';


const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
    event.preventDefault(); // evita  o recarregamento da pagina, padrão do submit
    controller.adiciona();
});
}else{
    throw Error('Não foi possível inicializar a aplicação. Verifique se o formulário existe!');
}

