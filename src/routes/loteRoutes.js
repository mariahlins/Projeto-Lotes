const { Router } = require('express');
const LoteController = require('../controllers/LoteController.js');

const loteController = new LoteController();
const router = Router();

router.get('/lotes', (req,res)=>{loteController.pegaTodos(req,res);});
router.get('/lote/:id',(req,res)=>{loteController.pegaPorId(req,res);});
router.post('/lote',(req,res)=>{loteController.cria(req,res);});
router.put('/lote/:id',(req,res)=>{loteController.atualiza(req,res);});
router.delete('/lote/:id',(req,res)=>{loteController.deleta(req,res);});

module.exports = router;
