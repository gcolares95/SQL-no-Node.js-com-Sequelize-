const User = require('../model/User');

// lida com as requisições e respostas
module.exports = {
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email })  // await frente porque toda manipulação com BD é assincrona
  
    return res.json(user);
  }
};