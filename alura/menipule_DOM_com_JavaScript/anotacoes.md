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
  