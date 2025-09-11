/*Melhorando o código*/


function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)
    if (elemento != null && elemento.localName === 'audio') {

        elemento.play();

    } else {
        console.log('Elemento não encontrado');
    }
}

const listaTeclas = document.querySelectorAll('.tecla')
listaTeclas[0].onclick = tocaSom

let cont = 0;

for (let cont = 0; cont < listaTeclas.length; cont++) {

    const tecla = listaTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

