const criarTarefa = (evento) =>{
    
    evento.preventDefault();
    
    const lista = document.querySelector('[data-list]');
    const entrada = document.querySelector('[data-form-input]');
    const valorEntrada = entrada.value;
    

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    lista.appendChild(tarefa);
    
    conteudo = `<p class="content">${valorEntrada}</p>`
    tarefa.innerHTML = conteudo;

    entrada.value = " ";
    
}

const botao = document.querySelector('[data-form-buttom]');


botao.addEventListener('click', criarTarefa);