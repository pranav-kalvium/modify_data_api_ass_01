const express = require('express');
const {addItem,getAllItems} = require('../contoller/menu')

const route = express.Router();

route.post('/add',addItem)
route.get('/get',getAllItems)
module.exports = route;