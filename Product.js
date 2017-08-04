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
        arrProducts.splice(index, 1);
    }
}

const arrProducts = [
    new Product(1, 'NodeJS', 'Khoa hoc Node tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product(2, 'ReactJS', 'Khoa hoc REactJS tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product(3, 'PHP', 'Khoa hoc Node tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product(4, 'Native', 'Khoa hoc REactJS tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product(5, 'Android', 'Khoa hoc Node tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product(6, 'Java', 'Khoa hoc REactJS tai Khoa Pham.vn', '18081777_th.jpg', '14506031')
];

module.exports = Product;
