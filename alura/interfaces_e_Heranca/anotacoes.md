# POO JavaScript

## Aula 5

Interfaces Implícitas em JavaScript (Duck Typing)

Em JavaScript, não há uma palavra-chave interface para definir formalmente um contrato que as classes devem seguir. Em vez disso, o JavaScript usa um conceito chamado "duck typing" (tipagem de pato), como mencionei antes.

Como Funciona na Prática

1. Expectativa de um Método: O sistema de autenticação espera que os objetos que ele recebe tenham um método específico, como autenticar().
2. Verificação em Tempo de Execução: Antes de chamar o método, o sistema verifica se o objeto realmente possui esse método (usando in e instanceof Function, como mostrado na aula).
3. Comportamento Polimórfico: Se o objeto tiver o método esperado, o sistema o chama, independentemente do tipo real do objeto.