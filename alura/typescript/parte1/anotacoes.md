# Typescript parte1

-proxy barrou o npm

## Aula 1

- npm é um gerenciador de pacotes do node.js
Ele permite que você instale, compartilhe e gerencie as dependências do seu projeto de forma fácil e eficiente.

- saber em sem ter que rodar o código que algo dá errado

## Aula 3

### elemento.addEventListener('submit', algum_nome => {})

Você precisa passar parâmetro para a função apenas se você precisar acessar informações sobre o evento que ocorreu ou se precisar impedir o comportamento padrão desse evento. Apenas executar uma função quando um botão é clicado, sem se importar com detalhes do evento

- Usando event para impedir o comportamento padrão
- Acessando informações do evento

### expreções regulares

Expressões regulares são padrões usados para corresponder combinações de caracteres em strings.

`const exp = /-/g;`  

o g diz que são todas as ocorrencias do "-"

- `replace(exp, ',')`: substitui uma expressão por outra

#### Outros métodos

- `test()`: Verifica se a expressão regular encontra uma correspondência em uma string, retornando true ou false.
- `match()`: Retorna um array com as correspondências encontradas na string.
- `search()`: Retorna o índice da primeira correspondência encontrada na string.
- `split()`: Divide uma string em um array de substrings, usando a expressão regular como delimitador.
