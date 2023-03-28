'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaksi, {
        foreignKey: 'mejaId', as: 'transaksi'
      })
    }
  }
  meja.init({
    nomor_meja: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'meja',
  });
  return meja;
};