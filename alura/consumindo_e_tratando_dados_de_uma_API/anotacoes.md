# consumindo e tratando dados da api

### API
Uma API (Interface de Programação de Aplicações) é um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem e troquem informações entre si.

### requisições HTTP

## Aula 2
Fazendo requisições HTTP
### instalar o json server

### fetch

faz busca da url e retorna uma Promise

### programação assincrona

Na programação síncrona, o código é executado linha por linha, ou seja, uma linha de código não começará a ser executada até que a linha anterior tenha sido totalmente concluída. No entanto, na programação assíncrona, o código não espera que uma linha seja concluída antes de passar para a próxima. Isso é muito útil quando estamos realizando tarefas que podem demorar algum tempo, como carregar uma imagem ou buscar dados de um servidor.

As **Promises** em JavaScript são objetos que representam o estado de uma operação assíncrona. Uma Promise pode estar em um de três estados: **pendente**(estado inicial, nem cumprido nem rejeitado), **resolvida/fulfilled** (a operação assíncrona foi concluída com sucesso) ou **rejeitada/rejected**(a operação assíncrona falhou).

Quando uma Promise retorna fulfilled, ela carrega consigo a **Response** que contém os dados e informações da resposta do servidor.

### .then

é o que permite que você trabalhe em cima do Response.
você passa uma função para o .then, e essa função recebe o resultado da Promise (no caso, o Response)
O .then também retorna uma nova Promise, o que permite encadear vários .thens para realizar uma série de operações de forma sequencial.

### .catch

para capturar erros especificamente

## Aula 3

### async await (espera assíncrona)

evitar a grande quantidade de .then sequenciais (callback)