'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class portal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  portal.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    abstract: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'portal',
  });
  return portal;
};