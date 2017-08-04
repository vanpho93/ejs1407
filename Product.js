class Product {
    constructor(id, title, desc, image, video) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.video = video;
    }

    static getAllProducts() {
        return arrProducts;
    }

    static addNewProduct(title, desc, image, video) {
        const product = new Product(arrProducts.length, title, desc, image, video);
        arrProducts.push(product);
    }
}

const arrProducts = [
    new Product(1, 'NodeJS', 'Khoa hoc Node tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product(2, 'ReactJS', 'Khoa hoc REactJS tai Khoa Pham.vn', '18081777_th.jpg', '14506031')
];

module.exports = Product;
