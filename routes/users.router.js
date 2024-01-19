const express = require
('express');
const router = express.Router();

const UsersService = require('../services/users.service')
const service = new UsersService();


router.get('/', (req, res) => {
  // limit y offset forman parte de la estrategia de paginacion
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });

  } else {
    res.send('No hay prametros');
  }
});

module.exports = router;
