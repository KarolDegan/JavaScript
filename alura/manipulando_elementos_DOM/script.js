const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const imagem = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');

const musicaBotao =document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const somComecar = new Audio('./sons/play.wav');
const somPausar = new Audio('./sons/pause.mp3');
const somTerminar = new Audio ('./sons/beep.mp3');
musica.loop = true;

let tempoDecorridoSegundos = 1500
const startPauseBt = document.querySelector('#start-pause');
let intervaloId

const iniciarPausarBt = document.querySelector('#start-pause span');
const imagemBotao = document.querySelector('.app__card-primary-butto-icon');

const tempoTela = document.querySelector('#timer');

musicaBotao.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
    }
})

/*focoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
    imagem.setAttribute('src','./imagens/foco.png')
});*/

focoBt.addEventListener('click', () =>{
    tempoDecorridoSegundos = 1500;
    alterarContexto('foco')
    focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = 300;
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
});

function alterarContexto(contexto){
    mostrarTempo()
    //Mundando o foco dos botões
    botoes.forEach(function(botao){
        botao.classList.remove('active')
    });

    //Alterando fundo
    html.setAttribute('data-contexto', contexto);
    
    //Alterando imagem
    imagem.setAttribute('src', `./imagens/${contexto}.png`);

    //Inserindo os textos
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície. <br> <strong class="app__title-strong"> Faça uma pausa longa. </strong>`
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoSegundos<=0){
        somTerminar.play();
        alert('Tempo finalizado');
        zerar();
        return
    }
    tempoDecorridoSegundos-= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarPausar);

function iniciarPausar(){
    if(intervaloId){
        somPausar.play();
        zerar()
        return
    }
    somComecar.play();
    intervaloId = setInterval(contagemRegressiva, 1000); // executa a função a cada 1segundo
    iniciarPausarBt.textContent = "Pausar";
    imagemBotao.setAttribute('src','/imagens/pause.png');
}

function zerar(){
    clearInterval(intervaloId); //interrompe a execução de algum código
    intervaloId = null;
    iniciarPausarBt.textContent = "Começar";
    imagemBotao.setAttribute('src','/imagens/play_arrow.png');
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br',{minute: '2-digit', second: '2-digit'})
    tempoTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();