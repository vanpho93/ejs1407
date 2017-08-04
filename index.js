const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.locals.title = 'Hello EJS';

app.get('/', (req, res) => { 
    res.render('index', { arrProducts });
});

app.listen(3000, () => console.log('Server started!'))

reload(app);

class Product {
    constructor(title, desc, image, video) {
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.video = video;
    }
}

const arrProducts = [
    new Product('NodeJS', 'Khoa hoc Node tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product('ReactJS', 'Khoa hoc REactJS tai Khoa Pham.vn', '18081777_th.jpg', '14506031')
];
