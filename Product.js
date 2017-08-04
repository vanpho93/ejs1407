class Product {
    constructor(title, desc, image, video) {
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.video = video;
    }

    static getAllProducts() {
        return arrProducts;
    }
}

const arrProducts = [
    new Product('NodeJS', 'Khoa hoc Node tai Khoa Pham.vn', '18081777_th.jpg', '14506031'),
    new Product('ReactJS', 'Khoa hoc REactJS tai Khoa Pham.vn', '18081777_th.jpg', '14506031')
];

module.exports = Product;
