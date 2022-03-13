// Model é a respresentação de como a nossa app vai se comunidar com a data base

const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) { // init recebe a conexão com a base de dados
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      // conexão com o banco de dados
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Address;