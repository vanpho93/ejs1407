const express = require('express');
const reload = require('reload');
const Product = require('./Product');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.locals.title = 'Hello EJS';

app.get('/', (req, res) => {
    const arrProducts =  Product.getAllProducts();
    res.render('index', { arrProducts });
});

app.listen(3000, () => console.log('Server started!'))

reload(app);
