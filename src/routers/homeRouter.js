const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.get('/produtos/:id/detalhes', homeController.show)


module.exports = router;