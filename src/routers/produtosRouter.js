const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController')

router.get('/adm/produtos', produtosController.index);
router.get('/adm/produtos/cadastro', produtosController.getCadastro);
router.post('/adm/produtos', produtosController.postCadastro);

module.exports = router;