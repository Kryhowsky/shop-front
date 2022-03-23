import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { ProductDto } from 'src/api/models';
import { BasketControllerService } from 'src/api/services';
import { AddProductToBasketAction, GetBasketProductsListAction } from './basket.actions';

export class BasketStateModel {
  public basketProducts: ProductDto[]
  public basketSize: number
}

const defaults = {
  basketProducts: [],
  basketSize: 0
};

@State<BasketStateModel>({
  name: 'basket',
  defaults
})

@Injectable()
export class BasketState {
  constructor(private readonly basketService: BasketControllerService) { }

  @Action(AddProductToBasketAction)
  addProductToBasket({ dispatch }: StateContext<BasketStateModel>, { basketDto }: AddProductToBasketAction) {
    return this.basketService.addProductToBasket({body: basketDto}).pipe(
      tap(response => dispatch(new GetBasketProductsListAction()))
    )
    
  }

  @Action(GetBasketProductsListAction)
  getBaksetProductsList({ patchState }: StateContext<BasketStateModel>) {
    return this.basketService.getBasketProducts().pipe(
      tap(response => patchState({basketProducts: response, basketSize: response.length}))
    )
  }
}
