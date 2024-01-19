const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

// CREATE
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body)
  res.status(201).json({newProduct});
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
