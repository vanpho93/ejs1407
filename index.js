const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.locals.title = 'Hello EJS';

app.get('/', (req, res) => { 
    res.render('index');
});

app.get('/products', (req, res) => {
    res.render('products', { mang: ['NodeJS', 'ReactJS', 'React Native'] });
});

app.listen(3000, () => console.log('Server started!'))

// killall -9 node

reload(app);