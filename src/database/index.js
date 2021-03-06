// conexão com data base
const Sequelize = require('sequelize') // S maiúsculo, pois é uma classe
const dbConfig = require('../config/database')

const User = require('../model/User');
const Address = require('../model/Address');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection
