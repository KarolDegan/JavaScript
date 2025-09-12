# Manipulando elementos DOM

## Aula 1

A variável data-contexto em um elemento <button> é um exemplo de um atributo de dado (data attribute) em HTML. Atributos de dados são usados para armazenar informações personalizadas e privadas em elementos HTML padrão, permitindo que você associe dados extras a elementos sem precisar usar atributos não-padrão, classes ou outras construções.

No caso de `[data-contexto="descanso-longo "]`, o seletor está buscando todos os elementos HTML que possuem o atributo data-contexto com o valor exatamente igual a "descanso-longo".

### seletores de elementos no DOM

1. querySelector(selector) .classe #id (vale como no css)
2. querySelectorAll(selector)
3. getElementById(id)
4. getElementsByClassName(className)
5. getElementsByTagName(tagName)

###

```html
<script src="script.js" defer></script>
```

### funções anonimas

- `() => { ... }`
- `function() { ... }`

São muito semelhantes só se diferenciando pela qe=uestão do this

### onclick ou addEventListener

```js
tecla.onclick = function () {
    console.log('Função A');
};
```

| Use `onclick` se...                       |
| ----------------------------------------- |
| Está fazendo algo muito simples e único   |
| Não precisa adicionar múltiplos listeners |
| Quer código mais direto e curto           |

| Use `addEventListener` se...                                        |
| ------------------------------------------------------------------- |
| Vai adicionar múltiplas ações ao mesmo evento                       |
| Precisa de mais controle (como `once`, `removeEventListener`, etc.) |
| Quer seguir as boas práticas modernas                               |

### elemento.addEventListener(evento, callback)

EVENTOS

- click
- submit
- keydown, keyup, keypress
- focus, blur

## Aula 3

### elemento.forEach

- para listas de elementos como as retornadas pelo querySelectorAll
- percorre cada elemento dentro da lista
- espera receber uma função como argumento.
- E essa função precisa de um argumento `elemento_array.forEach(function(elemento_singular)`

### elemento.classList

- pode `add` ou `remove` classes do elemento selecionado
- `toggle` alternar classe : Se a classe já estiver presente no elemento, o método a remove; caso contrário, ele a adiciona
- `contains` verificando se uma classe está presente
- Manipula várias classes simultaneamente

### Audios

#### Controles básicos de áudio
- play(): inicia a reprodução do áudio;
- pause(): pausa a reprodução do áudio;
- currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
- volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.

## Aula 4

- SetInterval
- ClearInterval