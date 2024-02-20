const router = require('express').Router();
const menuControllers = require('../controllers/menu')

router.get('/detalle/:id', menuControllers.getMenu)