# JS web

## Aula 2
```javascript
document.querySelector('.tecla_pom').onclick = tocaSomPom();

document.querySelector('.tecla_pom').onclick = tocaSomPom;
```

Quando escrevemos o nome da função e abrimos e fechamos parênteses imediatamente, não estamos guardando essa função dentro do atributo onclick, mas estamos dizendo para o navegador passar por esse trecho de código e executar a função imediatamente.

Portanto, se dentro de um arquivo .js queremos guardar uma função em um atributo onclick, precisamos retirar esses parênteses, porque só assim se ele vai guardar dentro do onclick a referência

## Aula 4

### funções anonimas

As funções anônimas são bem úteis quando queremos executar alguma coisa uma única vez ou em apenas um lugar.