/**Ser autenticavel significa ter um método autenticar */
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;
        
    }

    static ehAutenticavel(autenticavel){
        /**JS guarda as propriedades das classes dentro de um padrão de chave-valor */

        return "auntenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}