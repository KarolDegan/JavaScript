/*function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}*/


//document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla')

listaTeclas[0].onclick = tocaSom

let cont = 0;

while (cont <listaTeclas.length){
    //listaTeclas[cont].onclick = tocaSom;

    //funções anonimas

    const tecla = listaTeclas[cont];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    cont++;
}