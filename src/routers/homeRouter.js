const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
// router.get('/produtos/:id/detalhes', homeController.show)
router.get('/home/login', homeController.login)
router.get('/home/cadastro', homeController.register)
router.get('/home/detalhe', homeController.showdetalhe)
router.get('/home/investir', homeController.invest)


module.exports = router;