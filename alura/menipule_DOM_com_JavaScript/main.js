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

        tarefa.appendChild(BotaoConclui())
        entrada.value = " ";

    }

    const eventoConcluido = (evento) => {
        const botaoConclui = evento.target;

        const tarefaConcluida = botaoConclui.parentElement;

        tarefaConcluida.classList.toggle('done');
    }

    const botao = document.querySelector('[data-form-buttom]');


    botao.addEventListener('click', criarTarefa);

    const BotaoConclui = () => {
        //componentização
        const botaoConclui = document.createElement('button');

        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'Concluir';
        botaoConclui.addEventListener('click', eventoConcluido);

        return botaoConclui;
    }
})()