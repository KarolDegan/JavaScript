console.log(`Trabalhando com Loops`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Bahia`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "Curitiba";

console.log("Destinos Possíveis");
console.log(listaDestinos);

const podeComprar = idadeComprador>= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break
    }

    contador++;
}

console.log("Destino existe: ", destinoExiste);


if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, ocorreu algum erro!");
}

for(let cont = 0; cont<3; cont++){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break
    }
}
