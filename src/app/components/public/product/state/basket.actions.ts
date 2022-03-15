import { BasketDto } from "src/api/models";

export class AddProductToBasketAction {
  static readonly type = '[Basket] AddProductToBasketAction';
  constructor(public basketDto: BasketDto) { }
}

export class GetBasketProductsListAction {
  static readonly type = '[Basket] GetBasketProductsListAction';
  constructor() { }
}
