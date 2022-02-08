export class GetProductsPageAction {
  static readonly type = '[Product] GetProductsPageAction';
  constructor(public page: number, public size: number) { }
}
