'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      Curso.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });
      Curso.hasMany(models.Matricula, { // Corrigido para hasMany e para o nome correto Matricula
        foreignKey: 'curso_id'
      });
    }
  }
  Curso.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    data_publicacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};