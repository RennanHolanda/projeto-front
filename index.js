const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const homeRouter = require('./src/routers/homeRouter');
const produtosRouter = require('./src/routers/produtosRouter');

app.use(methodOverride('_method'));
// app.use(express.static('public'));
app.use(express.static(path.resolve('public'))); 
app.set('view engine', 'ejs'); 
app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(homeRouter);
app.use(produtosRouter);

app.use((req, res, next) => {
    return res.status(404).render('home/not-found', { error: 'Página não encontrada' });
})  

app.listen(3000, () => console.log('Rodando na porta 3000'))