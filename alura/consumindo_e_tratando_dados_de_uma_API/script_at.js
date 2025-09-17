const containerVideos = document.querySelector(".videos__container");


const api = fetch("http://localhost:3000/videos")
.then(resposta => resposta.json()) //  arrow function
    /*
     * .then((resposta) => {
      
            return resposta.json();
        });
     */
.then((videos) =>  //quando essa nova Promise é resolvida o resultado já é um array com os 13 videos
    videos.forEach((video) => {  //eu necessariamente preciso passar uma função para a estrutura do forEach
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem} alt="logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
        })
    )
.catch((erro) => {
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos${erro}</p>`;
})
