const Services = require('./Services.js')

class PessoasServices extends Services{
    constructor(){
        super('Pessoa');
    }

    async pegaMatriculaPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        console.log(estudante)
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }
}

module.exports = PessoasServices;