const express = require('express')
const UserController = require('./controllers/UserController');

const routes = express.Router()

// rota para cadastro de usuários
 routes.post('/users', UserController.store);

module.exports = routes
