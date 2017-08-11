const express = require('express');
const reload = require('reload');
const Product = require('./Product');
const upload = require('./uploadConfig');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.locals.title = 'Hello EJS';

app.get('/', (req, res) => {
    // const arrProducts =  Product.getAllProducts();
    // res.render('index', { arrProducts });
    Product.getAllProducts((err, products) => {
        if (err) return res.send(err.message);
        res.render('index', { arrProducts: products });
    });
});

app.get('/admin', (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) return res.send(err.message);
        res.render('admin', { arrProducts: products });
    });
});

app.get('/add', (req, res) => res.render('add'));

app.post('/add', upload.single('image'), (req, res) => {
    const { title, video, desc } = req.body;
    const image = req.file.filename;
    Product.addNewProduct(title, desc, image, video, err => {
        if (err) return res.send(err.message);
        res.redirect('/admin');
    });
});

app.post('/update/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, video, desc } = req.body;
    const image = req.file ? req.file.filename : 'default';
    Product.updateProduct(id, title, desc, image, video);
    res.redirect('/admin');
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    Product.removeProduct(id);
    res.redirect('/admin');
});

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    const product = Product.getProductById(id);
    res.render('update', { product });
});

app.listen(3000, () => console.log('Server started!'))

// reload(app);
