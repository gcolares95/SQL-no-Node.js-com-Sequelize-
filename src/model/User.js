// Model é a respresentação de como a nossa app vai se comunidar com a data base

const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) { // init recebe a conexão com a base de dados
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      // conexão com o banco de dados
      sequelize
    })
  }
}

module.exports = User;