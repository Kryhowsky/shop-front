import { ProductDto } from "src/api/models";

export class GetProductsPageAction {
  static readonly type = '[Product] GetProductsPageAction';
  constructor(public page: number, public size: number) { }
}

export class DeleteProductByIdAction {
  static readonly type = '[Product] DeleteProductByIdAction';
  constructor(public productId: number) { }
}

export class CreateProductAction {
  static readonly type = '[Product] CreateProductAction';
  constructor(public product: ProductDto, public image: Blob) { }
}

export class EditProductAction {
  static readonly type = '[Product] EditProductAction';
  constructor(public productId: number, public product: ProductDto, public image: Blob) { }
}

export class GetProductByIdAction {
  static readonly type = '[Product] GetProductByIdAction';
  constructor(public productId: number) { }
}

export class ClearProductAction {
  static readonly type = '[Product] ClearProductAction';
}