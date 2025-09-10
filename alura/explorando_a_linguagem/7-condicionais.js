console.log(`Trabalhando com Condicionais`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Bahia`
);

const idadeComprador = 15;
const estaAcompanhada = true;
let passagemComprada = false;

if (idadeComprador>= 18 || estaAcompanhada){
    console.log(`venda possivel`);
    listaDestinos.splice(2, 1);
    console.log(`Boa viagem!`);
}else{
    console.log(`não é maior de idade nem está acompanhado não pode vender!`);
}

console.log(`Embarque`);
if ((idadeComprador>= 18 || estaAcompanhada) && passagemComprada ){
    console.log(`Boa viagem!`);
} else{
    console.log(`Não pode embarcar!`);
}

console.log(listaDestinos);


/*if (idadeComprador >= 18) {
    console.log(`comprador é maior de diade!`)
    listaDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log(`comprador está acompanhado!`)
    listaDestinos.splice(1, 1);
} else {
    console.log(`não é maior de idade nem está acompanhado não pode vender!`);
}*/