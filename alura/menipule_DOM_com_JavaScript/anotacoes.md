# manipule o DOM com JavaScript

## Aula 2

### data - atribute

- deixa a class livre apenas para o css, e o data atribute para o javascript
- usa entre [] no querySelector('[data-atibuto]')
- ele é declarado como uma  propriedade da tag

###

Quando você adiciona um **evento** a um **elemento**, como um clique em um botão, o navegador automaticamente passa um objeto de "evento" para a função que você está executando. Esse objeto contém informações sobre o evento que aconteceu, como qual elemento foi clicado, as coordenadas do mouse, etc.

#### preventDefault()

pausa o comportamento padrão relacionado ao evento
No caso do formulário, que a resposta seja enviada imediatamente para o servidor e que a pagina seja recarregada.

### const valor = input.value;

- passagem de valor por copia, não por referencia, porque essa propriedade contém um valor do tipo string.
- e strings são sempre passadas por copia no js

## Aula 3

### adicionando elemento no dom createElement

```js
const tarefa = document.createElement('li'); //cria
tarefa.classList.add('task');
lista.appendChild(tarefa); // coloca na arvore DOM sempre por último
```

#### insertBefore(novoNo, noDeReferencia)

Este método insere um novo nó antes de um nó de referência específico.

#### replaceChild(novoNo, noAntigo)

Este método substitui um nó existente por um novo nó.

#### removeChild(no)

Este método remove um nó filho de seu nó pai.

## Aula 4

### selecionar o elemento pai

.parentElement

### evento.target

se refere ao elemento HTML que disparou o evento

### IIFE - função de execução imediata

colocar todo o arquivo dentro de uma função de execução imediata