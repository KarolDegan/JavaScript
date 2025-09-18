const containerVideos = document.querySelector(".videos__container");

async function buscarMostrarVidoes() {
    try {
        const api = await fetch("http://localhost:3000/videos");
        const videos = await api.json();

        // o await faz com que a execução espere e guarde o valor resolvido da Promise nas constantes busca e videos.

        videos.forEach((video) => {
            if (video.categoria == "") {
                throw new Error('Vídeo não tem categoria');
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem} alt="logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden> ${video.categoria}</p>
                </div>
            </li>
            `;
        })
    } catch (erro) {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos ${erro}</p>`
    } finally {
        console.log('isso sempre acontece')
    }
}

buscarMostrarVidoes(console.log("buscarMostrarVidoes rodando de novo!"));


const barraPesquisa = document.querySelector(".pesquisar__input");
barraPesquisa.addEventListener("input", filtrarPesquisa);
function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  const valorFiltro = barraPesquisa.value.toLowerCase();

  videos.forEach((video) => {
    const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
    //const kdakda = video.titulo; video é a estrutura HTML (apartir da li) e não a API, por isso não pode ser acessado assim
    
    video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
  });
}



const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item");
    console.log(`os videos estão aqui ${videos}`);
    for(let video of videos){  //outra forma sem ser o forEach, dá para usar o break, return e continue
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();  // é possivel usar o querySelector sem ser no document
        let valorFiltro = filtro.toLowerCase();             //textContent extrair o texto contido dentro de um elemento HTML.
        console.log(`a categoria é: ${valorFiltro}`);
        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}






