const Controller = require('./Controller.js');
const LoteServices = require('../services/LoteService.js');

const loteServices = new LoteServices();

class LoteController extends Controller{
    constructor(){
        super(loteServices);
    }
}

module.exports = LoteController;
