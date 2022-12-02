const ProdutoModel = require('../models/produtoModel');

const homeController = {

    index: (req, res) => {
       res.render('home/index')
    },

    login: (req, res) => {
        res.render('home/login')
    },

    register: (req, res) => {
        res.render('home/cadastro')
    },

    showdetalhe: (req, res) => {
        res.render('home/detalhe')
    },

    invest: (req, res) => {
        res.render('home/investir')
    }
}

module.exports = homeController;