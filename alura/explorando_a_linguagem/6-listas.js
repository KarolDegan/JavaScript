console.log(`Listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const bahia = `Bahia`;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Bahia`
);

listaDestinos.push(`Curitiba`);

console.log(`Destinos Possíveis`);
console.log(listaDestinos);

listaDestinos.splice(1,1); //Deleta são paulo (posição,quantidade)
console.log(listaDestinos);

//especifico
console.log(listaDestinos[1]);
