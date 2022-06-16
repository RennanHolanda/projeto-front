const ProdutoModel = require('../models/produtoModel');

const homeController = {

    index: (req, res) => {
        const produtos = ProdutoModel.findAll();
       return res.render('home/landingpage.ejs', { produtos: produtos });
    },
    show: (req, res) => {
        const {id} = req.params;
        const produto = Produtos.findById(id);
        if(!produto) {
            return res.send(`Produto não encontrado`);
        }
        return res.render('./produtos/detalhes', {produto});
    }
}
module.exports = homeController;