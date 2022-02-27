export class BasketAction {
  static readonly type = '[Basket] Add item';
  constructor(public payload: string) { }
}
