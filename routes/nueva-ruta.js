const express = require('express');

const router = expressRouter();

router.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
