const Controller = require('./Controller.js');
const LoteServices = require('./Services/LoteServices.js');

const loteServices = new LoteServices();

class LoteController extends Controller{
    constructor(){
        super(loteServices);
    }
}

module.exports = LoteController;

/*const database = require('../models');

class LoteController{
    static async getTodosOsLotes(req,res){
        try{
            const listaDeLotes = await Database.Lote.findAll();
            return res.status(200).json(listaDeLotes);
        }catch(erro){
            return res.status(500).json({message: erro.message})
        }
    }
    static async getLoteByPK(req,res){
        const id=req.params.id;
        try{
            const loteEncontrado= await database.Lote.findByPK(id);
            return res.status(200).json(loteEncontrado);
        }catch(erro){
            return res.status(500).json({message: erro.message})
        }
    }
    static async createLote(req,res){
        const novoLote=req.body;
        try{
            const novoLoteCriado=await database.Lote.create(novoLote);
            res.status(200).json({message:'Lote Criado',novoLote:novoLoteCriado})
        }catch(erro){
            return res.status(500).json({message: erro.message})
        }
    }
    static async updateLote(req,res){
        const id=req.params.id;
        const novaInfo=req.body;
        try{
            await database.Lote.update(novaInfo,{where:{id:Number(id)}});
            const loteAtualizado = await database.Lote.findByPK(id);
            res.status(200).json(loteAtualizado);
        }catch(erro){
            return res.status(500).json({message: erro.message})
        }
    }
    static async deleteLote(req,res){
        const id=req.params.id;
        try{
            await database.Lote.destroy({where: {id: Number(id)}});
            res.status(200).json({message:'Lote deletado'});
        }catch(erro){
            return res.status(500).json({message: erro.message})
        }
    }
    static async getLoteByPK(req,res){
        const id=req.params.id;
        try{

        }catch(erro){
            return res.status(500).json({message: erro.message})
        }
    }
}
module.exports = LoteController;*/