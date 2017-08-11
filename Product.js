const queryDb = require('./db');

class Product {
    constructor(id, title, desc, image, video) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.video = video;
    }

    static getProductById(id, cb) {
        queryDb('SELECT * FROM "Product" WHERE id = $1', [id], (err, result) => {
            if (err) return cb(err);
            if (result.rows.length === 0) cb(new Error('San pham khong ton tai'))
            cb(null, result.rows[0]);
        });        
    }

    static getAllProducts(cb) {
        queryDb('SELECT * FROM "Product"', [], (err, result) => {
            if (err) return cb(err);
            cb(null, result.rows);
        });
    }

    static addNewProduct(title, desc, image, video, cb) {
        // const product = new Product(arrProducts.length, title, desc, image, video);
        // arrProducts.push(product);
        const insertSQL = `INSERT INTO "Product"(title, "desc", image, video) 
            VALUES($1, $2, $3, $4)`;
        queryDb(insertSQL, [title, desc, image, video], err => cb(err));
    }

    static removeProduct(id, cb) {
        const deleteSQL = 'DELETE FROM "Product" WHERE id = $1';
        queryDb(deleteSQL, [id], (err) => {
            cb(err);
            // fs.unlinkSync('./public/images/background/' + arrProducts[index].image);
        })
    }

    static updateProduct(id, title, desc, image, video) {
        const index = arrProducts.findIndex(e => e.id == id);
        const pr = new Product(id, title, desc, image, video);
        arrProducts[index] = pr;
    }
}

const arrProducts = [
    new Product(1, 'NodeJS', 'Khoa hoc Node tai Khoa Pham.vn', '1.jpg', '227347753'),
    new Product(2, 'ReactJS', 'Khoa hoc REactJS tai Khoa Pham.vn', '2.jpg', '228740342'),
    new Product(3, 'PHP', 'Khoa hoc Node tai Khoa Pham.vn', '3.jpg', '226174033'),
    new Product(4, 'Native', 'Khoa hoc REactJS tai Khoa Pham.vn', '4.jpg', '227890020'),
    new Product(5, 'Android', 'Khoa hoc Node tai Khoa Pham.vn', '5.jpg', '226541685')
];

module.exports = Product;

/*

INSERT INTO public."Product"(title, "desc", image, video)
	VALUES ('NodeJS 1', 'Khoa hoc Node tai Khoa Pham.vn', '1.jpg', '227347753'),
    ('ReactJS', 'Khoa hoc REactJS tai Khoa Pham.vn', '2.jpg', '228740342'),
    ('PHP', 'Khoa hoc Node tai Khoa Pham.vn', '3.jpg', '226174033'),
    ('Native', 'Khoa hoc REactJS tai Khoa Pham.vn', '4.jpg', '227890020'),
    ('Android', 'Khoa hoc Node tai Khoa Pham.vn', '5.jpg', '226541685')

*/

// Product.addNewProduct('a', 'b', 'c', 'd', err => console.log(err));
// Product.removeProduct(10, err => console.log(err));
// Product.getProductById(5, (err, product) => console.log(product));

