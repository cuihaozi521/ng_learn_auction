import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, '这是描述信息!', 1, ['1', '123123asd']),
    new Product(2, '第二个商品', 2.99, '这是描述信息!', 3, ['1', '123123asd']),
    new Product(3, '第一个商品', 1.99, '这是描述信息!', 2, ['1', '123123asd']),
    new Product(4, '第一个商品', 1.99, '这是描述信息!', 1, ['1', '123123asd']),
    new Product(5, '第一个商品', 1.99, '这是描述信息!', 4, ['1', '123123asd']),
    new Product(6, '第一个商品', 1.99, '这是描述信息!', 5, ['1', '123123asd'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-02-02", "张三", 3, "东西不错"),
    new Comment(2, 1, "2011-02-02", "张三1", 4, "东西不错"),
    new Comment(3, 1, "2014-02-02", "张三2", 3, "东西不错"),
    new Comment(4, 2, "2018-02-02", "张三3", 3, "东西不错")
  ];
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(
    public  id: number,
    public  title: string,
    public  price: number,
    public  desc: string,
    public  rating: number,
    public  categories: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
