let listaSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


exibirMensagemInicial();


/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero Secreto';

let texto = document.querySelector('p');
texto.innerHTML = 'Escolha um número entre 1 e 10';*/

function verificarChute(){
    let chute = document.querySelector('input').value;
    /*console.log(chute == numeroSecreto);*/
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        exibirTextoNaTela('h1', 'Errou!');
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor!');
        }else{
            exibirTextoNaTela('p','O número é maior');
        }
        tentativas += 1;
        limparCampo();
    }
    
}


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*4 +1);
    if (listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}