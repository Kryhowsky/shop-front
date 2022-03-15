import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { ProductDto } from 'src/api/models';
import { BasketControllerService } from 'src/api/services';
import { AddProductToBasketAction, GetBasketProductsListAction } from './basket.actions';

export class BasketStateModel {
  public basketProducts: ProductDto[]
}

const defaults = {
  basketProducts: []
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
    this.basketService.addProductToBasket({body: basketDto})
    dispatch(new GetBasketProductsListAction())
  }

  @Action(GetBasketProductsListAction)
  getBaksetProductsList({ patchState }: StateContext<BasketStateModel>) {
    return this.basketService.getBasketProducts().pipe(
      tap(response => {
        patchState({basketProducts: response})
      })
    )
  }
}
