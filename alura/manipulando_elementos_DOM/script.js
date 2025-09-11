const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

const imagem = document.querySelector('.app__image');

/*focoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
    imagem.setAttribute('src','./imagens/foco.png')
});*/

focoBt.addEventListener('click', () =>{
    alterarContexto('foco')
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
});

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`);
}
