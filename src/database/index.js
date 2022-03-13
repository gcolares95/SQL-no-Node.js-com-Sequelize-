// conexão com data base
const Sequelize = require('sequelize') // S maiúsculo, pois é uma classe
const dbConfig = require('../config/database')

const User = require('../model/User');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection
