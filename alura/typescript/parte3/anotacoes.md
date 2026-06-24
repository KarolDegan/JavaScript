# Typescript parte3

## Aula 1

### Decorator

any desabita o target, mas ele pode ser estatico ou dinamico
trabalhar encima do construtor da classe ou da propria classe seja lá o que isso signifique

#### propertyKey

O propertyKey sempre obtém o nome do método, mas o tipo dele é string | symbol.

symbol: Em alguns casos mais avançados, você pode usar symbols para definir nomes de métodos. Symbols são valores únicos e imutáveis, que podem ser usados como chaves de propriedades de objetos. Se você usar um symbol como nome de um método, o propertyKey será do tipo symbol.

#### descriptor

ele te dá acesso ao método original que você quer "decorar"

O PropertyDescriptor é um objeto que contém informações sobre a propriedade decorada

### .apply()

é uma forma de chamar uma função definindo explicitamente o valor de this e os argumentos que serão passados para a função.

this é o contexto de execução de uma função.

Em decorators, é crucial garantir que this esteja corretamente definido para que o método original possa acessar os membros da classe.

.apply(this, args) permite definir explicitamente o valor de this ao chamar uma função, garantindo que o método original seja executado no contexto correto.

## Aula 3

### Object.defineProperty

é uma ferramenta poderosa em JavaScript que permite definir ou modificar propriedades de um objeto de forma precisa.

`Object.defineProperty(obj, prop, descriptor)`

- **obj**: O objeto no qual você quer definir ou modificar a propriedade.
- **prop**: O nome da propriedade que você quer definir ou modificar.
- **descriptor**: Um objeto que descreve as características da propriedade (valor, se é gravável, se é enumerável, etc.).