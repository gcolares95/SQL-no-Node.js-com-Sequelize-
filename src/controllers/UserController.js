const User = require('../model/User');

// lida com as requisições e respostas
module.exports = {
  async index (req, res) {
    // buscar todos usuários
    const users = await User.findAll();

    return res.json(users);
  },


  async store(req, res) {
    // inserir usuário
    const { name, email } = req.body;

    const user = await User.create({ name, email })  // await frente porque toda manipulação com BD é assincrona
  
    return res.json(user);
  }
};