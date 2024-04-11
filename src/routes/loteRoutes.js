const { Router } = require('express');
const LoteController = require('.\controllers\LoteController.js');

const loteController = new LoteController();
const router = Router();

router.get('/lotes', (req,res)=>{loteController.pegaTodos(req,res);});
router.get('/lote/:id',(req,res)=>{loteController.pegaPorId(req,res);});
router.post('/lote',(req,res)=>{loteController.cria(req,res);});
router.put('/lote/:id',(req,res)=>{loteController.atualiza(req,res);});
router.delete('/lote/:id',(req,res)=>{loteController.deleta(req,res);});

module.exports = router;


/*const {Router} = require('express');
const LoteController = require('../controllers/LoteController.js');

const routes = Router();

routes.get('/lotes',LoteController.getLotes);
routes.get('./lote/:id',LoteController.getLotesByPK);
routes.put('./lotes/:id',LoteController.updateLote);
routes.post('./lotes',LoteController.createLote);
routes.delete('./lotes/:id',LoteController.deleteLote);

modules.exports = routes;*/