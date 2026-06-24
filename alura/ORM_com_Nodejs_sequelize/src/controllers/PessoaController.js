const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller{
    constructor(){
        super(pessoaServices);
    }
    
    async pegaMatricula(req, res){
        const {estudanteId} = req.params;
        try{
            const listaMatriculas = await pessoaServices.pegaMatriculaPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        }catch(erro){

        }
    }
}

module.exports = PessoaController;