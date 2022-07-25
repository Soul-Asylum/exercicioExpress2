const express = require('express');
const routes = express.Router;
const products = require('../products')


routes.post('/produtos1', (req, res) => {
    const body = req.body
  
    newProducts = [...products, body];
    return res.status(200).json(newProducts);
  });

  routes.get('/', (req, res) => {
    res.status(200).json(products);
  })
  
  routes.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
  
    products = products.map((item)=> {
        if(item.id === id) {
          return {...item, ...body};
        }
        return item;
    })
    return res.status(200).json(products);
  })
  
  routes.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
  
    products = products.filter((item) => item.id !== id);
   return res.status(201).json(products);
  });
  
  routes.get("/", (req, res) => {
    return res.status(200).json(products);
  });

  module.exports = routes;