const criarTarefa = (evento) =>{
    
    evento.preventDefault();
    
    const entrada = document.querySelector('[data-form-input]');
    const valorEntrada = entrada.value;
    console.log(valorEntrada);
    entrada.value = " ";
}

const botao = document.querySelector('[data-form-buttom]');


botao.addEventListener('click', criarTarefa);