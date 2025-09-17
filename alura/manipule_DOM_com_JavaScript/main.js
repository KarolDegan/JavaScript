(() => {
    const criarTarefa = (evento) => {

        evento.preventDefault();

        const lista = document.querySelector('[data-list]');
        const entrada = document.querySelector('[data-form-input]');
        const valorEntrada = entrada.value;


        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        lista.appendChild(tarefa);

        conteudo = `<p class="content">${valorEntrada}</p>`
        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        entrada.value = " ";

    }

    const tarefaConcluida = (evento) => {
        const botaoConclui = evento.target;

        const tarefaConcluida = botaoConclui.parentElement;

        tarefaConcluida.classList.toggle('done');
    }

    const deletarTarefa = (evento) =>{
        const ondefoi = evento.target;

        const elementoPai = ondefoi.parentElement;

        elementoPai.remove();


    }

    const botao = document.querySelector('[data-form-buttom]');


    botao.addEventListener('click', criarTarefa);

    const BotaoConclui = () => {
        //componentização
        const botaoConclui = document.createElement('button');

        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'Concluir';
        botaoConclui.addEventListener('click', tarefaConcluida);

        return botaoConclui;
    }

    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button');

        botaoDeleta.classList.add('check-button');
        botaoDeleta.innerText = 'deletar';
        botaoDeleta.addEventListener('click', deletarTarefa);

        return botaoDeleta;
    }
})()