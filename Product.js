const fs = require('fs');

class Product {
    constructor(id, title, desc, image, video) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.video = video;
    }

    static getProductById(id) {
        return arrProducts.find(e => e.id == id);
    }

    static getAllProducts() {
        return arrProducts;
    }

    static addNewProduct(title, desc, image, video) {
        const product = new Product(arrProducts.length, title, desc, image, video);
        arrProducts.push(product);
    }

    static removeProduct(id) {
        const index = arrProducts.findIndex(e => e.id == id);
        fs.unlinkSync('./public/images/background/' + arrProducts[index].image);
        arrProducts.splice(index, 1);
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
