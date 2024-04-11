'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lote extends Model {
    static associate(models) {
    }
  }
  Lote.init({
    numeroLote: DataTypes.NUMBER,
    dataPlantio: DataTypes.STRING,
    dataColheita: DataTypes.STRING,
    infoAdicional: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lote',
    tableName:'lotes',
  });
  return Lote;
};