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
