// encontrando o maior e o menor valor
let maior = v[0]
let menor = v[0]
for(let c in v){
    if(v[c]>maior){
        maior = v[c]
    }
    if (v[c]<menor){
        menor = v[c]
    }
}