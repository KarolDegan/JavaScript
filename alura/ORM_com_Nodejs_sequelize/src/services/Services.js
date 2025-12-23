const dataSource = require ('../models');

class Services{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(){
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id_variavel){
        const listadeResgistroAtualidazado = dataSource[this.model].update(dadosAtualizados, {
            where:{
                id: id_variavel
            }
        });
        if(listadeResgistroAtualidazado[0] === 0){
            return false;
        }
        return true;
    }
}

module.exports = Services;