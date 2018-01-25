import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private comments: Comment[] = [
    new Comment(1, 1, "2017-02-02", "张三", 3, "东西不错"),
    new Comment(2, 1, "2011-02-02", "张三1", 4, "东西不错"),
    new Comment(3, 1, "2014-02-02", "张三2", 3, "东西不错"),
    new Comment(4, 2, "2018-02-02", "张三3", 3, "东西不错")
  ];
  constructor() { }
  getAllCategories(): string[] {
    return ['电子产品', '图书', '硬件设备'];
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
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
