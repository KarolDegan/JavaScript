const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const imagem = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');

const musicaBotao =document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

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
    alterarContexto('foco')
    focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
});

function alterarContexto(contexto){

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
