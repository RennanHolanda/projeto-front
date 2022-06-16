const Produtos = require('../models/produtoModel');


const produtosController = {
index: (req, res) => {
    const produtos = Produtos.findAll();
    return res.render('adm/produtos/lista.ejs',  {produtos})
},
getCadastro: (req, res) => {
return res.render('adm/produtos/cadastro.ejs');
},
postCadastro: (req, res) => {    
    const {nome, imagem, preco, ativo, descricao} = req.body;
    const produto = {
        nome,
        imagem,
        preco,
        ativo: (ativo ? true : false),
        descricao

    }
    Produtos.save(produto); //cadastra um novo produto no banco
    return res.redirect('/adm/produtos'); //retornar a pagina para o admin

}
};

module.exports = produtosController;