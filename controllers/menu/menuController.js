const menu = require('../../database/arrayobjetos.json');


module.exports = (req,res) => {
    const idProd = req.params.id
    res.render('detalleMenu');
  }